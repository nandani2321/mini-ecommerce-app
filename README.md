# Mini E-Commerce Store

This project is a mini e-commerce store built with React. It allows users to browse products, add them to a shopping cart, and manage their cart items.

## Project Structure

```
mini-ecommerce-store
├── public
│   └── index.html          # Main HTML structure of the application
├── src
│   ├── components          # Contains React components
│   │   ├── CartModal.jsx   # Component for displaying the shopping cart
│   │   ├── Header.jsx      # Component for the header with search and cart
│   │   ├── ProductCard.jsx  # Component for individual product cards
│   ├── context             # Contains context for state management
│   │   └── CartContext.jsx # Context for managing cart state
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point of the application
│   └── styles.css          # CSS styles for the application
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mini-ecommerce-store
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Browse through the available products.
- Use the search bar to find specific items.
- Click on "Add to Cart" to add items to your shopping cart.
- Access the cart by clicking on the cart button in the header to view and manage your selected items.

## Technologies Used

- React
- Tailwind CSS
- Context API for state management

## License

This project is licensed under the MIT License.