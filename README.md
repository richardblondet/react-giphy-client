
![Gifinder](screenshot.png)

# Gifinder

Gifinder is a simple react application prototype for finding GIFS. Because this is a prototype, it uses the [GIPHY](https://developers.giphy.com/docs/) public API.

## Getting Started

To run this application please follow these instructions.

### Installing

Run the following commands to start the app in development mode. Please check the package.json script for further modes.

First clone this repo and enter to the app directory:
```sh
$ git clone https://github.com/richardblondet/react-giphy-client.git && cd react-giphy-client

```
Then install all dependencies and start the app:
```sh
npm install && npm run dev
```


## Built With

* [React](https://reactjs.org/) - The web framework used
* [NextJS](https://nextjs.org/) - The react config framework
* [React Icons by Netlify](https://react-icons.netlify.com/) - [Feather Icons](https://feathericons.com/) for beautiful open source icons 
*  [NPM](https://www.npmjs.com) - Dependency management
* NodeJS

## Improvements opportunities
This application was not developed using TDD and so no test libraries were used. These can be easily achieved using this Jest or Mocha. An example can be found [here](https://github.com/zeit/next.js/tree/master/examples/with-jest) and [here](https://github.com/zeit/next.js/tree/canary/examples/with-mocha).
Some other this can be easily implemented and would improve the quality of this application. Some of them are:
* Better error handling.
* Documenting components using [this convention](https://react-styleguidist.js.org/docs/documenting.html).
* Adding type checking with propTypes to components for better controlling as recommended [here](https://reactjs.org/docs/typechecking-with-proptypes.html)
* Adding service workers to prefetch gifs results in the background with no user interaction for faster loading gifs while opening the lightbox and navigating in it.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Richard Blondet**  - [RichardBlondet](https://github.com/richardblondet)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.