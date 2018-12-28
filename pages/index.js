import Page from '../components/Page'
import Logo from '../components/Logo'
import Container from '../components/Container'
import SearchBar from '../components/Search'
import Gifs from '../components/Gifs'
import GiphyService, { API_KEY } from '../config/GiphyService'

import { PLACEHOLDER_GIFS } from '../config/placeholder-data'

const Giphy = new GiphyService( API_KEY );

export default class Index extends React.Component {
	
	constructor() {
        
        super();

        this.state = {
            gifs: [],
            isSearching: false,
            isLoaded: false,
            showing: ''
        }

    }

    componentDidMount() {
    	this.gifTrendingHandler()
    }
    
    gifTrendingHandler() {
    	
    	Giphy.getTrendindGifs( 6 )
    		.then( result => this.setState({gifs: result.data, showing: 'Treding'}) )
    		.catch( error => console.log( error ))

    }
    gifSearchHandler = (  text  ) => {
    	
    	Giphy.searchGifs( text )
    		.then( result => this.setState({gifs: result.data, showing: 'Search Results'}) )
    		.catch( error => console.log( error ))

    }
    

	render() {
		return (
			<Page>
				<Container pt={ this.state.isSearching ? '1em': '3em' }>
					<Logo />
				</Container>
				<Container width="480px">
					<SearchBar handleTextQueryChange={ this.gifSearchHandler }  />
				</Container>
				<Container width="70%" pt="1em">
					<Gifs gifs={ this.state.gifs } showing={ this.state.showing } />
				</Container>
			</Page>
		)
	}
}