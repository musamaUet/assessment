# NestJS User Management Project

## Overview
A bids management service built with NestJS. Includes:
- **PostgreSQL**: Data storage.
- **Docker Compose**: Service management.

---

## How to Run the Project

### Pre-Requisites
1. **Install Docker and Docker Compose**.
2. **Clone the Repository**:
   ```bash
   git clone https://github.com/musamaUet/care-axiosm-assessment
   cd /care-axiosm-assessment/user-management

2. **Add a .env File in the project root:**:
### PostgreSQL
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=user-management

### Steps to Run
Start services:
```bash
   docker-compose up --build

Access:
NestJS API: http://localhost:3000
RabbitMQ Console: http://localhost:15672 (Default: guest/guest)
Verify logs for successful connections.

## API Documentation

### Base URL
http://localhost:3017
