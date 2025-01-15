# Coontstack: Docker Compose Stack for Development

Coontstack is a comprehensive development stack designed by Imam Nc to simplify local development environments. With support for multiple versions of PHP, Node.js, Go, and essential services like MySQL, PostgreSQL, Redis, and more, Coontstack ensures seamless integration for a variety of development needs.

## 🚀 Features

- **Multi-PHP**: Easily switch between PHP versions (8.3, 8.0, 7.4).
- **Multi-Node.js**: Support for multiple Node.js versions (e.g., Node.js 20).
- **Databases**:
  - MySQL
  - PostgreSQL
- **Database Management**:
  - phpMyAdmin
  - pgAdmin
- **Caching**: Redis for efficient data caching.
- **Real-time Communication**: Soketi for WebSocket services.
- **Email Testing**: Mailpit for capturing and testing email functionality.
- **Object Storage**: MinIO for S3-compatible object storage.

## 🛠️ Requirements

- **Docker**: Version 20.10 or higher.
- **Docker Compose**: Version 2.0 or higher.

## 📂 Directory Structure

```
coontstack/
├── core/
│   ├── go/                 # Golang service files
│   ├── nginx/              # Nginx configurations
│   ├── php74/              # PHP 7.4 service files
│   ├── php80/              # PHP 8.0 service files
│   ├── php83/              # PHP 8.3 service files
│   ├── redis/              # Redis configuration
│   ├── node20/             # Node.js 20 service files
│   ├── .env                # Environment configuration file
│   ├── docker-compose.yml  # Docker Compose configuration
├── projects/               # Project files mounted to containers
├── README.md               # Readme repository
```

## 🔧 Usage

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/imamnc/coontstack.git
   cd coontstack
   ```

2. **Set Up Environment Variables**:

   - Copy the example `.env` file and configure it according to your needs.
     ```bash
     cd core
     cp .env.example .env
     ```

3. **Start the Stack**:

   ```bash
   docker compose up -d
   ```

4. **Access Services**:

   - **Nginx**: [http://localhost](http://localhost)
   - **phpMyAdmin**: [http://localhost:8080](http://localhost:8080)
   - **pgAdmin**: [http://localhost:5050](http://localhost:5050)
   - **Mailpit**: [http://localhost:8025](http://localhost:8025)
   - **MinIO**: [http://localhost:9000](http://localhost:9000)

5. **Stop the Stack**:
   ```bash
   docker compose down
   ```

## 🌟 Highlights

- **Customizability**: Easily add or remove services to match your project requirements.
- **Version Control**: Manage multiple versions of PHP, Go, and Node.js simultaneously.
- **Developer Tools**: Includes Mailpit and MinIO to cover all aspects of development.

## 🛡️ Security

This stack is designed for **local development purposes only**. Do not use it in production environments without additional security configurations.

## 🤝 Contribution

Contributions are welcome! If you have ideas or improvements, feel free to submit a pull request or open an issue. Best Regards **Imam Nc**

## 📜 License

This project is licensed under the [MIT License](LICENSE).
