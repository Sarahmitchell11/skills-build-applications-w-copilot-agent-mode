# OctoFit Tracker Frontend

The React presentation tier consumes the OctoFit API.

## API configuration

`VITE_CODESPACE_NAME` must be defined to call a Codespaces API. Add it to `octofit-tracker/frontend/.env.local`:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

With this value, requests use `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`. When `VITE_CODESPACE_NAME` is unset, the application safely uses `http://localhost:8000/api` instead.
