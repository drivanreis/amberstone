#!/bin/bash

# Abort on errors
set -e

# Função para obter o timestamp formatado
get_timestamp() {
    date +'%H:%M'
}

echo "🧹 Excluindo a pasta dist local..."
rm -rf dist

echo "🔄 Atualizando a branch 'main' local e limpando o diretório de trabalho..."
# Garante que estamos na branch 'main'
git checkout main
git pull origin main --rebase
git clean -fd

# --- NOVO ALERTA E VERIFICAÇÃO ---
echo ""
echo "####################################################################"
echo "# ALERTA: Para seguir com o deploy, a branch 'main' deve estar   #"
echo "#         ATUALIZADA, COMMITADA e com PUSH para o repositório    #"
echo "#         remoto (origin/main).                                  #"
echo "####################################################################"
echo ""
read -p "Deseja continuar com o deploy? (S/N): " choice

case "$choice" in
  s|S ) echo "✅ Continuando com o deploy..." ;;
  n|N ) echo "❌ Deploy cancelado. Por favor, atualize, comite e faça push da sua branch 'main'."
        exit 0 ;; # Sai do script
  * )   echo "Opção inválida. Deploy cancelado."
        exit 1 ;; # Sai com erro
esac
# --- FIM DO NOVO ALERTA ---

echo "⚙️  Criando nova build na pasta dist com Vite..."
npm run build

echo "💾 Commitando alterações no branch main..."
# Verifica se há alterações para comitar
if ! git diff --quiet --exit-code; then
    echo "ℹ️ Nenhuma alteração de código-fonte para comitar no branch main."
    # Não há necessidade de push se não há commits novos
else
    git add .
    TIMESTAMP=$(get_timestamp)
    git commit -m "Build: Nova pasta dist $TIMESTAMP"
    echo "✅ Alterações de código-fonte commitadas no branch main."
    # Se houve commit, faz o push
    git push origin main
    echo "✅ Alterações enviadas para o branch main remoto."
fi

echo "⏳ Aguardando 15 segundos para garantir atualização do GitHub antes do deploy..."
sleep 15

echo "🚀 Enviando conteúdo da pasta dist para a branch gh-pages usando 'gh-pages' pacote..."
npm run deploy

echo "⏳ Aguardando 20 segundos para publicação no GitHub Pages..."
sleep 20

echo "✅ Deploy finalizado com sucesso!"
echo "🌐 Acesse em: https://drivanreis.github.io/amberstone/"