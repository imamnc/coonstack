# Get base image
FROM node:20-alpine

# Install software
RUN apk add bash nano git curl

# Install pm2
RUN npm install pm2@latest -g

# Setting working directory
WORKDIR /var/www/html

# Set default user
USER root

# Make pm2 directory
RUN mkdir /home/pm2

# Expose port
EXPOSE 5173 5174 3000 3001 3002 3003 3004 3005 3006 3007 3008 3009 3010

# Entrypoint
ENTRYPOINT [ "node" ]
# CMD ["pm2-runtime", "/home/ecosystem.config.js"]