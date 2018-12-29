import Gifs from '../Gifs'
import LightBoxSlideShow from './LightBoxSlideShow'

export default class GifsLightBoxGallery extends React.Component {
	
	constructor( props ) {
		super( props )

		this.state = {
			isOn: this.props.gif ? true:false,
			gif: null,
			currentIndex: 0
		}
	}

	componentDidMount() {}

	componentWillUnmount() {}
	

	toggleModal = () => {
		this.setState({
			isOn: !this.state.isOn
		})
	}

	startGifSlideShow = ( index ) => {

		this._gifIndexExists( index ) && this.setState({
			gif: this.props.gifs[ index ],
			currentIndex: index,
			isOn: true
		})

		// cache nexts
		if( this.state.isOn && this._gifIndexExists( this.state.currentIndex + 1 ) ) {
			this._prefecthAndCacheGif( this.props.gifs[ this.state.currentIndex + 1 ] )
		}
		// cache prevs
		if( this.state.isOn && this._gifIndexExists( this.state.currentIndex - 1 ) ) {
			this._prefecthAndCacheGif( this.props.gifs[ this.state.currentIndex - 1 ] )
		}

	}

	nextSlide = () => {
		this.setState({
			isOn: false,
			gif: null
		})
		this.startGifSlideShow( this.state.currentIndex + 1 )
	}
	
	prevSlide = () => {
		this.setState({
			isOn: false,
			gif: null
		})
		this.startGifSlideShow( this.state.currentIndex - 1 )
	}

	_gifIndexExists( index ) {
		return this.props.gifs[ index ] ? true:false
	}

	_prefecthAndCacheGif( gif ) {
		if( gif && gif.cached ) return

		const img = document.createElement( 'img' )
		img.src = gif && gif.images.original.url

		gif.cached = true
		console.log('caching gifs')

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
					this.state.isOn ?
						<LightBoxSlideShow 
							isOn={ this.state.isOn } 
							toggleModal={ this.toggleModal } 
							gif={ this.state.gif } 
							prevSlide={ this.prevSlide }
							nextSlide={ this.nextSlide } 
							index={ this.state.currentIndex } 
							onKeyUp={ event => console.log( event ) }
						/>
					:
						<div></div>
				}
			</div>
		)
	}
}