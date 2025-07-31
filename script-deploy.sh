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

echo "⚙️  Criando nova build na pasta dist com Vite..."
npm run build

echo "💾 Commitando alterações no branch main..."
# Verifica se há alterações para comitar
if ! git diff --quiet --exit-code; then
    echo "ℹ️ Nenhuma alteração de código-fonte para comitar no branch main."
    # Se não houver alterações, não há necessidade de push
else
    git add .
    TIMESTAMP=$(get_timestamp)
    git commit -m "Build: Nova pasta dist $TIMESTAMP"
    echo "✅ Alterações de código-fonte commitadas no branch main."
    # Se houve commit, faz o push
    git push origin main
    echo "✅ Alterações enviadas para o branch main remoto."
fi
# Adicione um 'else' aqui para o push se o commit não aconteceu
# ou simplesmente remova a condição para o push se você quiser que ele tente sempre

# Removi o 'git push origin main' que estava fora do if/else
# Agora ele só faz o push se um commit foi realmente feito

echo "⏳ Aguardando 15 segundos para garantir atualização do GitHub antes do deploy..."
sleep 15

echo "🚀 Enviando conteúdo da pasta dist para a branch gh-pages usando 'gh-pages' pacote..."
npm run deploy # <--- ESTA LINHA CRUCIALMENTE DIFERENTE:

echo "⏳ Aguardando 20 segundos para publicação no GitHub Pages..."
sleep 20

echo "✅ Deploy finalizado com sucesso!"
echo "🌐 Acesse em: https://drivanreis.github.io/amberstone/"