import LightBoxWindow from './LightBoxWindow'
import LightBoxContent from './LightBoxContent'
import { LightBoxCloseButton, LightBoxNavButton } from './LightBoxButtons'

/**
 * Lighbox slideshow for gifs component.
 */
export default class LightBoxSlideShow extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			isOpen: false
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.onKeyDownHandler, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.onKeyDownHandler, false);
	}

	onKeyDownHandler = event => {

		if( this.props.gif && event.key === "Escape" ) {
			this.closeSlideShow()
		}
		if( this.props.gif && event.key === "ArrowRight" ) {
			this.nextSlide()
		}
		if( this.props.gif && event.key === "ArrowLeft" ) {
			this.prevSlide()
		}
		
	}

	closeSlideShow = event => {
		this.props.unsetSelectedGif()
	}

	nextSlide = event => {
		console.log('navigate nextSlide');
		this.props.nextSlide( this.props.index + 1 )
	}
	
	prevSlide = event => {
		console.log('navigate prevSlide');
		this.props.prevSlide( this.props.index - 1 )
	}
	
	render() {
		return (
			<LightBoxWindow open={ this.props.gif }>
				
				<LightBoxCloseButton onClick={ this.closeSlideShow } />
				
				<LightBoxContent 
					image={ this.props.gif && this.props.gif.images.original.url } 
					url={ this.props.gif && this.props.gif.bitly_url } 
				/>
		    	
		    	<LightBoxNavButton direction="left" onClick={ this.prevSlide } />
		    	
		    	<LightBoxNavButton direction="right" onClick={ this.nextSlide } />

		    </LightBoxWindow>
		)
	}
}