# The Global Kitchen API

## Tech Stack

- **Runtime:** Node.js v18+
- **Framework:** Express v4
- **Database:** MongoDB via Mongoose
- **Configuration:** dotenv

## Features

- Create, read, update, and delete recipes
- Filter recipes by category
- Schema validation on all fields
- Global error handling with proper HTTP status codes

## Installation & Setup

1. Clone the repository:

```bash
git clone [your-repo-url]
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
npm start
```
