import Page from '../components/Page'
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
				<SearchBar handleTextQueryChange={ this.gitfSearchHandler } />
				<Gifs gifs={ this.state.gifs } />
			</Page>
		)
	}
}