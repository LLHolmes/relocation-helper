When working, in Procfile set web as:
web: cd client && npm start
api: bundle exec rails s -p 3001


For deployment, in Procfile:
web: bundle exec rails s

Add to .env.development:
HOST=homebuyers-helper-app.herokuapp.com

Change baseUrl in app/client/src/actions/actionHelpers.js
