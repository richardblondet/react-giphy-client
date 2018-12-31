import Gifs from '../Gifs'
import LightBoxSlideShow from './LightBoxSlideShow'

/**
 * Gif lgihbox and gif list container for passing data and controlling behabior
 */
export default class GifsLightBoxGallery extends React.Component {
	
	constructor( props ) {
		super( props )

		this.state = {
			currentIndex: false,
			cached: false
		}

	}

	requestGif = ( index ) => {
		this.setState({ cached: true })

		var RequestPromise = new Promise(( resolve, reject ) => {
			
			if( this.gifIndexExists( index ) ) {
				resolve( index )
			}
			else {
				reject( false )
			}
		})

		return RequestPromise;
	}

	setCurentIndex = ( index ) => {
		this.setState({ currentIndex: index })
	}

	onClickGifRequestHandler = ( index ) => {

		this.requestGif( index )
		
			.then(( gif, indx ) => {
				
				this.setState({
					currentIndex: index
				})
			})
			
			.catch(( result ) => {
				this.setState({
					currentIndex: false
				})
			})
	}
	
	unsetSelectedGif = () => {
		this.setState({
			currentIndex: false
		})
	}


	gifIndexExists( index ) {
		return this.props.gifs[ index ] ? true:false
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
					gifs={ gifs } 
					index={ this.state.currentIndex }
					setSelectedGif= { this.setCurentIndex }
					gifIndexExists={ this.gifIndexExists }
					unsetSelectedGif={ this.unsetSelectedGif }

				/>

			</div>
		)
	}
}