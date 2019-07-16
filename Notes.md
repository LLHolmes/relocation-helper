When working, in Procfile set web as:
web: cd client && npm start


For deployment, in Procfile:
web: bundle exec rails s

Add to .env.development:
HOST=homebuyers-helper-app.herokuapp.com
