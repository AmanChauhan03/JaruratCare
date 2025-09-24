/*
README — Patient Records Dashboard (Jarurat Care)


What this repo contains
- A single-file React app (App.jsx) that implements a Patient Records Dashboard.
- Features:
- Landing header with "Jarurat Care"
- Navigation (Home, Patients, About)
- Patients page that fetches patient data from JSONPlaceholder and maps to patient records
- Responsive card/grid layout showing Name, Age, Contact
- Search bar to filter patients by name
- View Details modal for each patient
- Local "Add New Patient" form (updates local state only)
- Loading and error states
- State management using React Hooks (useState, useEffect)

Notes on styling & deployment
- I used Tailwind utility classes for quick responsive styling. If you do not have Tailwind set up, either set it up or replace classes with your own CSS.
- Deploy to Vercel/Netlify by connecting the GitHub repo and using default build command (npm run build). For Vite the build command is `npm run build` and output dir is `dist`.

*/