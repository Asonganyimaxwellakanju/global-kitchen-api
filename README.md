# The Global Kitchen API
NAME:ASONGANYI MAXWELL AKANJU
MATRICULE:LMUI250704
Email:[asonganyimaxwella@gmail.com]
Course:FullStack Development with javascript


## Tech Stack

- **Runtime:** Node.js v24.11.0
- **Framework:** Express 4.22.2
- **Database:** MongoDB via Mongoose
- **Configuration:** dotenv

## Features

## Features
- Create a new recipe via POST request
- Retrieve all recipes via GET request
- Filter recipes by category using query parameter
- Update specific fields of a recipe via PATCH request
- Delete a recipe via DELETE request
- Schema validation using required, min, enum and trim
- BSON data types for cookingTime and timestamps
- Database indexing on category field for fast lookups
- Global error handler for consistent error responses
- Returns 404 when a recipe ID does not exist
- Returns 400 for invalid recipe ID format
- Async/await on all database calls to prevent blocking
- Single database connection module following DRY principle
- ESLint configured for consistent code style
- Environment variables managed via dotenv

## Installation & Setup

1. Clone the repository:

```bash
git clone [https://github.com/Asonganyimaxwellakanju/global-kitchen-api.git]
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the server:

```bash
npm run dev
```
