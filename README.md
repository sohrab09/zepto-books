# Gutenberg Bookstore

This is a React.js web application that fetches and displays a list of books from the [Gutendex API](https://gutendex.com/books). The app allows users to search for books by title, filter by genre/topic, and create a wishlist that is stored in the browser’s local storage. The application also supports pagination and is fully responsive.

## Features

- **Book List**: Displays a clean, user-friendly list of books with title, author, cover image, genre, and ID.
- **Search Bar**: Allows users to search books by title in real-time.
- **Genre/Topic Filter**: Filter books based on genre/topic using a dropdown.
- **Wishlist**: Users can add/remove books from their wishlist, which is stored in local storage. Wishlisted books are marked with a like icon.
- **Pagination**: Pagination for easy navigation between pages of book listings.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.
  
## Pages

- **Homepage**: Displays a list of books with search and filter functionalities, pagination, and an option to add books to the wishlist.
- **Wishlist Page**: Displays a list of books that have been wishlisted by the user and also Shows detailed information for each individual book.

## Technologies Used

- **React.js**: For building the UI components and handling the application’s logic.
- **Context API**: Used to manage the global state of the application, such as the wishlist data, and provide it to different components without prop drilling.
- **Custom Hooks**: Used to abstract common logic (e.g., managing pagination, search, and wishlist functionality) for cleaner and reusable code.
- **CSS**: Styling the application using vanilla CSS.
- **JavaScript**: For functionality such as fetching API data, search, filter, pagination, and wishlist management.
- **LocalStorage**: For storing wishlisted books in the user's browser.
- **Gutendex API**: Public API to fetch book data.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sohrab09/zepto-books
   cd zepto-books
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## Usage

1. On the homepage, browse through the list of books.
2. Use the search bar to filter books by title.
3. Use the dropdown to filter books by genre/topic.
4. Click the love icon on any book to add it to your wishlist. Visit the wishlist page to see all your wishlisted books.
5. Use pagination controls to navigate through the book list.
6. Click on a book title to view its detailed information on a separate page.

## Context API and Custom Hooks

- **Context API**: Used to manage the global state, such as the wishlist. This allows the wishlist state to be accessible across the application without passing props through multiple components.
  
- **Custom Hooks**: Custom React hooks are implemented to handle common logic, including:
  - **usePagination**: Manages pagination logic, making it easy to switch between pages.
  - **useSearch**: Handles real-time search functionality.
  - **useWishlist**: Manages wishlist logic, including adding/removing books and storing wishlist data in local storage.

## API

The app fetches data from the [Gutendex API](https://gutendex.com/books). For more information, refer to the [API Documentation](https://gutendex.com/).

## Live URL Link

[https://zepto-books.netlify.app/](https://zepto-books.netlify.app/)