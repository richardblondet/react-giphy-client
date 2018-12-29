import Page from '../components/Page'
import Logo from '../components/Logo'
import Container from '../components/Container'
import SearchBar from '../components/Search'
import GifsLightBoxGallery from '../components/LightBox'
import GiphyService, { API_KEY } from '../config/GiphyService'

import { PLACEHOLDER_GIFS } from '../config/placeholder-data'

const Giphy = new GiphyService( API_KEY );

export default class Index extends React.Component {
	
	constructor() {
        
        super();

        this.state = {
        	error: false,
            gifs: [],
            isLoading: false,
            showing: '',
            text: '',
            limit: 15,
            pagination: null,
            currentGif: null
        }

    }

    componentDidMount() {
    	this.gifTrendingHandler()
    }
    
    gifTrendingHandler() {
    	this.setState({ isLoading: true })
    	
    	Giphy.getTrendindGifs( 6 )
    		.then( result => this.setState({ gifs: result.data, showing: 'Popular Gifs @giphy', isLoading: false }) )
    		.catch( error => console.log( error ))

    }
    
    gifSearchHandler = (  text  ) => {
    	this.setState({ isLoading: true, text: text })
    	
    	Giphy.getGifs( 'search', { q: this.state.text, limit: this.state.limit })
    		.then( result => {
    			this.setState({ gifs: result.data, showing: 'Search Results', isLoading: false,  pagination: result.pagination }) 
    		})
    		.catch( error => console.log( error ))

    }

    loadMoreGifs = () => {
    	Giphy.getGifs( 'search', { q: this.state.text, limit: this.state.limit, offset: this.state.gifs.length })
    		.then( result => {
    			this.setState({ gifs: [...this.state.gifs, ...result.data], showing: 'Search Results', isLoading: false,  pagination: result.pagination }) 
    		})
    		.catch( error => console.log( error ))
    }


	render() {
		return (
			<Page>
                
				<Container pt="3em">
					<Logo />
				</Container>
				<Container width="480px">
					<SearchBar handleTextQueryChange={ this.gifSearchHandler } isLoading={ this.state.isLoading } />
				</Container>
				<Container width="70%" pt="1em">
                    <GifsLightBoxGallery 
                        gifs={ this.state.gifs } 
                        showing={ this.state.showing } 
                        loadMeSomeMoreMagic={ this.loadMoreGifs } 
                    />
				</Container>
			</Page>
		)
	}
}