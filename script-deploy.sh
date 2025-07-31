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
if ! git diff --quiet --exit-code; then
    echo "ℹ️ Nenhuma alteração de código-fonte para comitar no branch main."
else
    git add .
    TIMESTAMP=$(get_timestamp)
    git commit -m "Build: Nova pasta dist $TIMESTAMP"
    echo "✅ Alterações de código-fonte commitadas no branch main."
fi
git push origin main

echo "⏳ Aguardando 15 segundos para garantir atualização do GitHub antes do deploy..."
sleep 15

echo "🚀 Enviando conteúdo da pasta dist para a branch gh-pages usando 'gh-pages' pacote..."
# ESTA É A LINHA CRUCIALMENTE DIFERENTE:
npm run deploy # <--- ESTA LINHA CHAMA O SCRIPT DEPLOY DO SEU PACKAGE.JSON

echo "⏳ Aguardando 20 segundos para publicação no GitHub Pages..."
sleep 20

echo "✅ Deploy finalizado com sucesso!"
echo "🌐 Acesse em: https://drivanreis.github.io/amberglass/"