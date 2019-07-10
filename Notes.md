When working, in Procfile set web as:
web: cd client && npm start
For deployment:
web: bundle exec rails s
