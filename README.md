🎬 Movie App – React.js

A responsive movie search application built using React.js that allows users to browse movies, view detailed information, and save favorites using LocalStorage.
Data is fetched in real-time using the OMDB API.

🚀 Live Demo (Deployment Link)

👉 (Add your Netlify / Vercel link here)
Example:
https://your-movie-app.netlify.app

📸 Screenshots
1. Home Page

(Add screenshot here)
/screenshots/home.png

2. Search Results

(Add screenshot here)
/screenshots/search.png

3. Movie Details Page

(Add screenshot here)
/screenshots/details.png

4. Favorites Page

(Add screenshot here)
/screenshots/favorites.png

⭐ Features
🔍 1. Movie Search

Search movies using OMDB API

Display movie poster, title, year, and rating

Responsive movie card layout

🎥 2. Movie Details Page

Dynamic route: /movie/:id

Full details:

Title, poster

Plot, genre, rating

Runtime, actors

Add / Remove favorites

❤️ 3. Favorites Page

Save movies to favorites using LocalStorage

Persist data even after page reload

Remove movies from favorites

Responsive gallery view

📦 4. LocalStorage

Stores:

Favorite movies

(Optional) Recently viewed movies

🌙 5. Bonus (Optional Enhancements)

Dark mode toggle

Smooth animations (Framer Motion)

Skeleton loaders for fetching states

Tooltips and modals

🛠️ Tech Stack

React.js

JavaScript (ES6+)

CSS / Tailwind / Bootstrap (Choose based on your project)

React Router

OMDB API

LocalStorage

📂 Folder Structure
movie-app/
 ├── public/
 ├── src/
 │   ├── components/
 │   │     ├── MovieCard.jsx
 │   │     ├── SearchBar.jsx
 │   │     ├── PaginationButton.jsx
 │   │     └── Loader.jsx
 │   │
 │   ├── pages/
 │   │     ├── Home.jsx
 │   │     ├── MovieDetails.jsx
 │   │     └── Favorites.jsx
 │   │
 │   ├── context/
 │   │     └── FavoritesContext.jsx
 │   │
 │   ├── utils/
 │   │     └── api.js
 │   │
 │   ├── App.jsx
 │   ├── index.js
 │   └── styles.css
 │
 ├── package.json
 └── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository
git clone https://github.com/your-username/movie-app.git

2. Navigate into the project
cd movie-app

3. Install dependencies
npm install

4. Add your OMDB API key

Edit the file:

src/utils/api.js


const API_KEY = "9153b1b1";

5. Start the development server
npm start


The app will open at:

http://localhost:3000

🌐 API Used
OMDB API

Register and get a free API key:
https://www.omdbapi.com/apikey.aspx

🚀 Deployment

You can deploy on:

Netlify

npm run build

Upload the build/ folder OR connect GitHub repo

Vercel

Import GitHub project

Select framework: React

Deploy

🧪 Future Enhancements

Pagination numbers

Trending movies section

User authentication (watchlist stored in cloud)

TMDB API integration for better metadata

Improve UI/UX with animations and themes

👩‍💻 Author

Your Name
GitHub: https://github.com/your-username




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
