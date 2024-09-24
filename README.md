![Jenny Cannabis Logo](/assets/img/logo_text_transparent.png)
# Everything Cannabis Project POC

This project is a web application for a medical cannabis reseller, featuring both a React frontend and a Django backend.

## Project Structure

The project is divided into two main parts:

1. Frontend (React + TypeScript + Vite)
2. Backend (Django + REST Framework)

### Frontend

The frontend is built using React with TypeScript and Vite as the build tool. It's located in the `src/frontend` directory.

Key features:
- React components for product display and navigation
- Tailwind CSS and Material UI for styling
- API integration with the backend using Axios

### Backend

The backend is built using Django and Django REST Framework. It's located in the `src/backend` directory.

Key features:
- Django models for products, countries, and product features
- REST API endpoints for fetching product data
- MySQL database integration

## Getting Started

### Frontend

1. Navigate to the frontend directory:
   ```
   cd src/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`.

### Backend

1. Navigate to the backend directory:
   ```
   cd src/backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```
   python manage.py migrate
   ```

5. Run the development server:
   ```
   python manage.py runserver
   ```

The backend API will be available at `http://localhost:8000`.

## Environment Variables

Make sure to set up the following environment variables for the backend:

- `SECRET_KEY`: Django secret key
- `DEBUG`: Set to 'True' for development, 'False' for production
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts
- `DB_NAME`: Database name
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_HOST`: Database host
- `DB_PORT`: Database port

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
