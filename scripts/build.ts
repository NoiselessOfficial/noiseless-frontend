import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

console.log('Iniciando build...')

try {
    const distPath = path.resolve(process.cwd(), 'dist')

    if (fs.existsSync(distPath)) {
        console.log('Removendo build anterior...')
        fs.rmSync(distPath, { recursive: true, force: true })
    }

    console.log('Executando build...')
    execSync('npm run build', { stdio: 'inherit' })

    console.log('Build concluído com sucesso!')
} catch (error: any) {
    console.error('XX Erro durante o build:', error.message)
    process.exit(1)
}
