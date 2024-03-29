FROM node:18-alpine3.15

# Set working directory
WORKDIR /app
RUN npm i -g nodemon

# Add package.json to WORKDIR and install dependencies
COPY package*.json ./
RUN npm install

# Add source code files to WORKDIR
COPY . .

# Application port (optional)
EXPOSE 3000

# Container start command (DO NOT CHANGE and see note below)
CMD ["npm", "start"]