# Homebuyer's Helper

Flatiron School - React Portfolio Project

Home Sweet Homebuyer's Helper!  Thinking of buy or selling a home?  Want to keep tabs on your real estate investments?  Need to contest the dreaded assessor’s office?  Increase your knowledge of the current housing market with Homebuyer's Helper - a React app with a Rails back end.

## Usage
This project is currently run on your local host.

Please fork and clone this repo then:

Run:
  $ bundle install

Then:
  $ rake db:create && rake db:migrate

To run on your local machine:
  $ rake start

Shut down the server using control C.

If you have issues you may need to install the react front end before trying to start the server again:
  $ cd client
  $ npm install
  $ cd ..
  $ rake start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



Enter an address into Homebuyer's Helper and receive information on that home along with a list of recently sold comparable homes.  If logged in, you can save the address of your home/s and they'll greet you next time you log in.

Happy home buying!

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

After checking out the repo, you can run `rails c` for an interactive prompt that will allow you to experiment with the Rails back end.

The page will reload if you make edits on the front end in the client folder.<br>
You will also see any lint errors in the console.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/LLHolmes/yarn_stash_organizer. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Yarn Stash Organizer project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/<github username>/yarn_organizer/blob/master/CODE_OF_CONDUCT.md).
