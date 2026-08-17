FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

#COMANDOS

#CRIAR IMAGEM DOCKER    => docker build -t [nome da imagem que você preferir]:vue3 [caminho do Dockerfile]
#CRIAR CONTAINER DOCKER => docker run --name [nome do container que você preferir] -v [caminho do diretório do projeto]:/app -dp 5173:5173 [nome da imagem que você definiu]:vue3
