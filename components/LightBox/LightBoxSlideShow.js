import LightBoxContent from './LightBoxContent'
import { LightBoxCloseButton, LightBoxNavButton } from './LightBoxButtons'

/**
 * Lighbox slideshow for gifs component.
 */
export default class LightBoxSlideShow extends React.Component {
	constructor( props ) {
		super( props )
	}

	componentDidMount(){
		document.addEventListener("keydown", this.onKeyDownHandler, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.onKeyDownHandler, false);
	}

	onKeyDownHandler = event => {

		if( this.props.gif && event.key === "Escape" ) {
			this.handleCloseClick()
		}
		if( this.props.gif && event.key === "ArrowRight" ) {
			this.nextSlide()
		}
		if( this.props.gif && event.key === "ArrowLeft" ) {
			this.prevSlide()
		}
		
	}

	handleCloseClick = event => {
		this.props.unsetSelectedGif()
	}

	nextSlide = event => {
		this.props.nextSlide( this.props.index + 1 )
	}
	
	prevSlide = event => {
		this.props.prevSlide( this.props.index - 1 )
	}
	
	render() {
		return (
			<div className="modal-container">
				<div className={ `modal ${ this.props.gif ? 'show-modal' : '' }` }>
					<div className="modal-content-wrapper">
						
						<LightBoxCloseButton onClick={ this.handleCloseClick } />
						<LightBoxContent 
							image={ this.props.gif && this.props.gif.images.original.url } 
							url={ this.props.gif && this.props.gif.bitly_url } 
						/>
				    	<LightBoxNavButton direction="left" onClick={ this.prevSlide } />
				    	<LightBoxNavButton direction="right" onClick={ this.nextSlide } />
				    	
					</div>
				</div>
				<style jsx>{`
					.modal {
					        position: fixed;
					        left: 0;
					        top: 0;
					        width: 100%;
					        height: 100%;
					        background-color: rgba(0, 0, 0, 0.5);
					        opacity: 0;
					        visibility: hidden;
					        transform: scale(1.1);
					        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
					    }
					    .modal-content-wrapper {
					        position: relative;
					        width: 100%;
					        height: 100%;
					    }
					    :global( .modal-close-button button, .modal-navigation-button button ) {
					        border: none;
					        background-color: transparent;
					        border-radius: 4px;
					        padding: 2px 9px;
					        font-weight: 600;
					        color: #fff;
					        cursor: pointer;
					    }
					    :global( .modal-navigation-button--left ) {
					        left: 0;
					    }
					    :global( .modal-navigation-button--right ) {
					        right: 0;
					    }
					    .show-modal {
					        opacity: 1;
					        visibility: visible;
					        transform: scale(1.0);
					        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
					        z-index: 100;
					    }
				`}</style>
			</div>
		)
	}
}