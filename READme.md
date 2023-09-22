Dependencies
Welcome to Node.js version: v18.17.0 and npm version: '9.6.7',

The project used for the backend
    "@strapi/strapi": "4.13.7",
    "@strapi/plugin-users-permissions": "4.13.7",
    "@strapi/plugin-i18n": "4.13.7",
    "better-sqlite3": "8.6.0"
For the frontend
    "@astrojs/react": "^3.0.2",
    "astro": "^3.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sass": "^1.68.0"

Install all Dependencies (npm i)

   To run the project from the universe directory, run the "startAll" script
   The script will run in dev mode backend and frontend

   To enter the admin panel

When cloning a project, a new database is created. In the folder backend/json-for-db/json-ex.txt
There is a json for creating new collection items for the test

A mandatory item will be to set in the admin panel "Settings" -> "USERS & PERMISSIONS PLUGIN" -> "Roles"
Public -> set all accesses. By default, they are not available


   The Fox collection for adding items is
   Fields:
    categorization - string
    url (to the picture) - string
    title - string
    description - string
    likes - number
    urlWiki (link to wikipedia) - string

   For the frontend, we used Astro+React (TS) components with SCSS styling

   In the component folder - React Components

   http://localhost:1337 hardcoded )


