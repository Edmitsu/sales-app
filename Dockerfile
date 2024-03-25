# Use a imagem base do Node.js na versão 20.5.1
FROM node:20.5.1

# Instalação do driver MongoDB
RUN npm install mongoose

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Exponha a porta que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "server.js"]
