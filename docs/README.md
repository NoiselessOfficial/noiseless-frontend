COMO USAR

DESENVOLVIMENTO:
npm run dev              # Inicia servidor de desenvolvimento
npm run type-check       # Verifica tipos TypeScript
npm run lint            # Verifica qualidade do código

BUILD:
npm run build           # Build padrão
npm run build:custom    # Build com otimizações

DEPLOY:
npm run deploy          # Deploy automatizado
npm run preview         # Preview do build

MANUTENÇÃO:
npm run clean           # Limpa cache e build
npm run type-check      # Verifica tipos

COMMIT:

git add .
npx cz
npm run release
git push