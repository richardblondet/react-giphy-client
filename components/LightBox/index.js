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

	componentDidMount(){
		document.addEventListener("keydown", this.onKeyDownHandler, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.onKeyDownHandler, false);
	}
	
	onKeyDownHandler = event => {
		if( this.state.isOn && event.key === "Escape" ) {
			this.toggleModal()
		}
		if( this.state.isOn && event.key === "ArrowRight" ) {
			this.nextSlide()
		}
		if( this.state.isOn && event.key === "ArrowLeft" ) {
			this.prevSlide()
		}
		
		
	}

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
		this._gifIndexExists( index + 1  ) && this._prefecthAndCacheGif( this.props.gifs[  index + 1 ] )
		// cache prevs
		this._gifIndexExists( index - 1  ) && this._prefecthAndCacheGif( this.props.gifs[  index - 1 ] )

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

		const img = document.createElement( 'img' )
		img.src = gif && gif.images.original.url

		gif.cached = true


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