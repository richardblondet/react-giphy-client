import Gifs from '../Gifs'
import LightBoxSlideShow from './LightBoxSlideShow'

/**
 * Gif lgihbox and gif list container for passing data and controlling behabior
 */
export default class GifsLightBoxGallery extends React.Component {
	
	constructor( props ) {
		super( props )

		this.state = {
			gif: this.props.gif ? this.props.gif:null,
			currentIndex: 0,
			cached: false
		}
	}

	requestGif = ( index ) => {

		this.setState({ cached: true })

		var RequestPromise = new Promise(( resolve, reject ) => {
			
			if( this._gifIndexExists( index ) ) {
				resolve( this.props.gifs[ index ], index )
			}
			else {
				reject( null, index )
			}
		})

		return RequestPromise;
	}

	onClickGifRequestHandler = ( index ) => {
		
		this.requestGif( index )
		
			.then(( gif, index ) => {
				
				this.setState({
					gif: gif,
					currentIndex: index,
				})
			})
			
			.catch(( result ) => {
				console.log( 'No gif' , result );
			})
	}

	_gifIndexExists( index ) {
		return this.props.gifs[ index ] ? true:false
	}
	
	unsetSelectedGif = () => {
		this.setState({
			gif: null,
			currentIndex: 0
		})
	}

	render() {
		const {
			gifs,
			showing,
			loadMeSomeMoreMagic
		} = this.props 

		return (
			<div>
				
				<Gifs 	
					gifs={ gifs } 
                    showing={ showing } 
                    loadMeSomeMoreMagic={ loadMeSomeMoreMagic } 
                    onGifClick={ this.onClickGifRequestHandler } />
				
				
				<LightBoxSlideShow
					gif={ this.state.gif } 
					prevSlide={ this.requestGif }
					nextSlide={ this.requestGif } 
					index={ this.state.currentIndex } 
					unsetSelectedGif={ this.unsetSelectedGif }

				/>
				
			</div>
		)
	}
}