import Page from '../components/Page'
import Container from '../components/Container'
import SearchBar from '../components/Search'
import Gifs from '../components/Gifs'

import { PLACEHOLDER_GIFS } from '../config/placeholder-data'
// console.log( PLACEHOLDER_GIFS );


export default class Index extends React.Component {
	constructor() {
        super();

        this.state = {
            gifs: PLACEHOLDER_GIFS
        }
    }

    gitfSearchHandler = (  text  ) => {
    	console.log( text  );
    }

	render() {
		return (
			<Page>
				<Container width="480px" pt="4em">
					<SearchBar handleTextQueryChange={ this.gitfSearchHandler } />
				</Container>
				<Container width="70%" pt="1em">
					<Gifs gifs={ this.state.gifs } />
				</Container>
			</Page>
		)
	}
}