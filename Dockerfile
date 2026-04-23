FROM node:18

WORKDIR /app

# Copy everything first
COPY . .

# Install root dependencies
RUN npm install

# Install backend dependencies
RUN npm install --prefix Backend

# Install frontend dependencies
RUN npm install --prefix Frontend

# Expose ports
EXPOSE 3000
EXPOSE 5000

# Start the project
CMD ["npm", "run", "dev"]