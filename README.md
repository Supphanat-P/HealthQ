# HealthQ

Development & Docker

Prereqs:

- Docker & Docker Compose
- Node 18+ (for local dev)

Run with Docker Compose (builds frontend, backend, and MySQL):

```powershell
cd /d "d:\Documents\VSCODE\react\HealthQ\HQ\HealthQ"
docker compose up --build
```

This will expose:

- Backend API: http://localhost:4000
- Frontend dev server (if using Vite inside container): http://localhost:5173
- phpMyAdmin: http://localhost:8080 (optional)

Local development (without Docker):

- Install deps:

```powershell
npm install
cd frontend
npm install
```

- Start backend with nodemon:

```powershell
npm run backend:dev
```

- Start frontend dev server:

```powershell
npm run dev
```

Notes:

- The backend will attempt to connect to MySQL if DB environment variables are set; otherwise it falls back to in-memory sample data.
- I added a Vite dev proxy so frontend requests to `/doctors` are forwarded to the backend during dev.
