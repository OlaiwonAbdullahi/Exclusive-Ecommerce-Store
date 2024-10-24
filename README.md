# Exclusive Ecommerce Store

**Exclusive Ecommerce Store** is a fully responsive, feature-rich ecommerce web application built using ReactJS, TailwindCSS, Redux ToolKit, Firebase, and the DummyJson API. It allows users to browse through a collection of products, view product details, add items to the cart, and complete their purchase. It also includes a user authentication system and a seamless checkout experience.

## Live Demo

You can explore the live version of the app here: [Exclusive Ecommerce Store ](https://github.com/https://exclusive-ecommerce-store-abdul.vercel.app)

## Features

- **Product Listing:** Displays a variety of products fetched from the DummyJson API.
- **Product Filtering & Sorting:** Users can filter products by categories.
- **Product Details:** Users can view detailed information about each product.
- **Add to Cart:** A cart feature that allows users to add, update, and remove products.
- **User Authentication:** Firebase is used to authenticate users (Sign in and Sign up functionality).
- **Checkout:** Users can review their cart and proceed to a checkout page to complete the purchase.
- **Responsive Design:** The app is fully responsive and optimized for both desktop and mobile devices.
- **Redux Toolkit Integration:** Manages the application state and ensures smooth handling of cart operations and user authentication.
- **Tailwind CSS for Styling:** Tailwind CSS is used for fast and flexible UI development.

## Screenshots

### Home Page

### Product Details

### Cart Page

## Built With

- **ReactJS:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Redux ToolKit:** A predictable state container for managing the global state of the application.
- **Firebase Authentication:** A backend service that provides authentication methods.
- **DummyJson API:** Provides a collection of dummy products to simulate a real-world ecommerce store.
- **Vercel:** For hosting and deployment of the app.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js (v14+)
- npm or yarn (package manager)
- A Firebase project with Authentication enabled (for the authentication feature)

### Installation

1.  **Clone the repository**

    `git clone https://github.com/OlaiwonAbdullahi/Exclusive-Ecommerce-Store.git`

2.  **Navigate into the project directory**

    `cd Exclusive-Ecommerce-Store`

3.  **Install dependencies**

    Using npm:

    `npm install`

    Or using yarn:

    `yarn install`

4.  **Set up Firebase Authentication**

        - Create a Firebase project at Firebase Console.
        - Enable **Email/Password** authentication in the **Authentication** section.
        - Create a `.env` file in the root of the project and add your Firebase configuration details:


          `REACT_APP_FIREBASE_API_KEY=your-api-key

    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id`

5.  **Start the development server**

    Using npm:

    `npm start`

    Or using yarn:

    `yarn start`

6.  **Visit the app**

    Once the server is up and running, open your browser and visit:

    `http://localhost:5173`

## Folder Structure

Here’s an overview of the folder structure:

`Exclusive-Ecommerce-Store/
│
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and other media files
│   ├── components/         # Reusable components (Header, Footer, ProductCard, etc.)
│   ├── features/           # Redux slices for different app features (cart, products, auth)
│   ├── pages/              # Application pages (Home, ProductDetails, Cart, Checkout, etc.)
│   ├── services/           # API calls (DummyJson API and Firebase config)
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point of the app
│   └── ...
├── .env                    # Environment variables (Firebase config)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation`

## Usage

Once the app is set up, you can:

- Browse through products
- Add items to the cart
- Create an account or sign in using Firebase Authentication
- Proceed to checkout and complete your purchase

## API Reference

This project uses the DummyJson API for fetching product data. For more information, check out the DummyJson API documentation.

## Deployment

The app is deployed using Vercel. To deploy your own version:

1.  Create a Vercel account and link your GitHub repository.
2.  Set up the environment variables (Firebase config) in your Vercel project settings.
3.  Deploy the project directly from the Vercel dashboard.

For detailed deployment instructions, visit the Vercel documentation.

## Contributing

If you wish to contribute to this project, feel free to submit a pull request. You can also raise issues and feature requests on the [GitHub Issues](https://github.com/OlaiwonAbdullahi/Exclusive-Ecommerce-Store/issues) page.

## Contact

- **GitHub:** [OlaiwonAbdullahi](https://github.com/OlaiwonAbdullahi)
- **Portfolio:** abdullahiolaiwon.netlify.app
- **LinkedIn:** [Abdullahi Olaiwon](https://www.linkedin.com/in/abdullahiolaiwon/)
