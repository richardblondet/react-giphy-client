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

	startGifSlideShow = ( index ) => {

		this._gifIndexExists( index ) && this.setState({
			gif: this.props.gifs[ index ],
			currentIndex: index,
			cached: true
		})

		// cache nexts
		this._gifIndexExists( index + 1  ) && this._prefecthAndCacheGif( this.props.gifs[  index + 1 ] )
		// cache prevs
		this._gifIndexExists( index - 1  ) && this._prefecthAndCacheGif( this.props.gifs[  index - 1 ] )

	}

	requestGif = ( index ) => {

		const gifExists = this._gifIndexExists( index )
		
		this.setState({
			gif: gifExists ? this.props.gifs[ index ] : null,
			currentIndex: gifExists ? index:0
		})
		
		gifExists && this.startGifSlideShow( index );
	}

	_gifIndexExists( index ) {
		return this.props.gifs[ index ] ? true:false
	}

	_prefecthAndCacheGif( gif ) {
		const img = new Image()
		img.src = gif && gif.images.original.url

		gif.cached = true

	}
	
	unsetSelectedGif = () => {
		this.setState({
			gif: null
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
                    onGifClick={ this.startGifSlideShow } />
				
				{
					this.state.cached ?
						<LightBoxSlideShow
							gif={ this.state.gif } 
							prevSlide={ this.requestGif }
							nextSlide={ this.requestGif } 
							index={ this.state.currentIndex } 
							unsetSelectedGif={ this.unsetSelectedGif }
						/>
					: 
					<div></div>
				}
			</div>
		)
	}
}