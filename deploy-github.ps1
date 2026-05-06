# Script para subir o projeto no GitHub
# Execute no PowerShell dentro da pasta UXDIGO

Set-Location $PSScriptRoot

Write-Host "== Inicializando repositório git ==" -ForegroundColor Cyan
git init
git add .
git commit -m "feat: portfolio inicial - React + Vite + Tailwind"

Write-Host "`n== Criando repositório no GitHub e fazendo push ==" -ForegroundColor Cyan
gh repo create Uxdigosite --public --source=. --remote=origin --push

Write-Host "`n== Pronto! Seu repositório está em: ==" -ForegroundColor Green
Write-Host "https://github.com/uxdigo/Uxdigosite" -ForegroundColor Yellow
