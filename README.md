# :newspaper: Paper Scraper (aka Onion Peeler) :trollface:
A `Node.js` &amp; `MongoDB` webapp that web-scrapes news data from [The Onion](http://www.theonion.com/) and allows users to comment about what they have read. Users can also delete unwanted comments.

Please check out the deployed version in Heroku [here](http://paper-scraper.herokuapp.com/)!


## Functionality
On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `handlebars` for templating each article and `materialize` as a styling framework. The app also uses `jQuery` and `AJAX` to help with making post requests.

And for webscraping, the app uses the `request` and `cheerio` node packages. All webscrapping code can be found in the `controllers.js` file.


## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your laptop
    * An amazing repo to get you started with that can be found [here](https://github.com/dannyvassallo/mongo_lesson).
  2. Once you are set up, `cd` into this repo and run `npm install`.
  3. Then open another bash or terminal window and run `mongod`
  4. Run the script with `node server.js`.
  5. Navigate to `localhost:3000` in your browser.


## Screenshots
#### The `/articles` route renders all the news articles
![All Articles](/screenshots/content.png)

#### Click on the globe icon to view the content.
![Article Content](/screenshots/article.png)

#### Click the Chat Bubble icon to add a comment via the `/add/comment/:id` post route
![Add Comment](/screenshots/add-comment.png)

#### Click the Thumbs up/down icon to view comments
![View Comment](/screenshots/view-comment.png)

#### Click the Delete button to remove rude comments via the `remove/comment/:id` route
![Delete Comment](/screenshots/delete-comment.png)

#### Note that the web scraping occurs on the `/scrape` route.
#### On visiting the index route, `/`, express redirects to `/scrape` and then `/articles` routes
