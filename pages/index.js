import Page from '../components/Page'
import Logo from '../components/Logo'
import Container from '../components/Container'
import SearchBar from '../components/Search'
import Gifs from '../components/Gifs'

import { PLACEHOLDER_GIFS } from '../config/placeholder-data'
// console.log( PLACEHOLDER_GIFS );


export default class Index extends React.Component {
	constructor() {
        super();

        this.state = {
            gifs: PLACEHOLDER_GIFS,
            isSearching: false
        }
    }

    gitfSearchHandler = (  text  ) => {
    	console.log( text );
    	if( text.length > 1 ) {
    		this.setState({
    			isSearching: true
    		})
    	}
    }

	render() {
		return (
			<Page>
				<Container pt={ this.state.isSearching ? '1em': '3em' }>
					<Logo />
				</Container>
				<Container width="480px">
					<SearchBar handleTextQueryChange={ this.gitfSearchHandler } />
				</Container>
				<Container width="70%" pt="1em">
					<Gifs gifs={ this.state.gifs } />
				</Container>
			</Page>
		)
	}
}