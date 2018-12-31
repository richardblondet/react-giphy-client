import LightBoxWindow from './LightBoxWindow'
import LightBoxContent from './LightBoxContent'
import LightBoxGifImage from './LightBoxGifImage'
import LightBoxImageError from './LightBoxImageError'
import Loading from '../Shared/LoadingAnimation'
import { LightBoxCloseButton, LightBoxNavButton } from './LightBoxButtons'

/**
 * Lighbox slideshow for gifs component.
 */
export default class LightBoxSlideShow extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			isOpen: false,
			imageReady: false
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

	preloadImage = () => {
		let img = new Image()
		img.onload = this.onLoadHandler
		img.onerror = this.onErrorHandler
		img.src = this.props.image
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
			<LightBoxWindow open={ this.state.isOpen }>
				
				<LightBoxCloseButton onClick={ this.closeSlideShow } />
					
					<LightBoxContent>

						<Loading 
							color="#000" 
							loading={ true } 
						/>

						<LightBoxGifImage 
							src={''} 
							href={''} 
						/>

					</LightBoxContent>
		    	
		    	<LightBoxNavButton 
		    		direction="left" 
		    		onClick={ this.prevSlide } 
		    	/>
		    	
		    	<LightBoxNavButton 
		    		direction="right" 
		    		onClick={ this.nextSlide } 
		    	/>

		    </LightBoxWindow>
		)
	}
}