# E-Commerce Frontend Project

This project is the frontend application of a modern e-commerce platform developed using **React**, **Vite**, and **Tailwind CSS**. It is powered by a custom **.NET Web API** backend built with the Onion Architecture.

## Features

### User Features
- **Product Review**: Users can view detailed product information.
- **Add to Cart**: Add desired products to the shopping cart.
- **Purchase**: Complete the checkout process to purchase products.

### Admin Panel
- **Product Management**: Add, delete, and update products.
- **Category and User Management**: Manage categories and user roles.
- **Order Management**: View and update order statuses.

### Authentication & Authorization
- **JWT Token-Based Authentication**: Users log in and receive a token for session management.
- **Token Storage**: Tokens are securely stored in local storage.

### Modular Architecture
The project follows a modular architecture for maintainability and scalability:
- **Components**: Reusable UI components.
- **Containers**: Components with business logic.
- **Pages**: Application pages with layouts.
- **Services**: Handles business logic and API calls.
- **Assets**: Images, icons, and other static resources.
- **API**: Centralized API endpoint definitions using Axios.
- **Utils**: Helper functions and utilities.

## Technologies Used
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Backend API**: .NET Web API with Onion Architecture

## Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/Uricaryn/ECommerceUI.git>
   ```
   
2. Navigate to the project directory:

   ```bash
   cd <ECommerceUI>
   ```
   
4. Install dependencies:

 ```bash
npm install
 ```

4. Start development server:

```bash
npm run dev
```

## API Integration
The frontend interacts with the backend via Axios, with all API endpoints defined in the api folder. Authentication is managed using JWT tokens, and APIs requiring authentication include a token in the request headers.

## Deployment
The project can be deployed to any static hosting platform (e.g., Vercel, Netlify) by building the project:

```bash
npm run build
```

The generated files will be available in the dist folder.

##Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for new features or improvements.

##License
This project is licensed under the MIT License.
