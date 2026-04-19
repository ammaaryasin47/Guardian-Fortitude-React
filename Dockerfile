# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Install root dependencies
RUN npm install

# Copy project files
COPY . .

# Install backend dependencies
RUN npm install --prefix backend

# Install frontend dependencies
RUN npm install --prefix frontend

# Expose ports
EXPOSE 3000
EXPOSE 5000

# Start both backend and frontend
CMD ["npm", "run", "dev"]