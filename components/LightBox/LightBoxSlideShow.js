import LightBoxContent from './LightBoxContent'
import { LightBoxCloseButton, LightBoxNavButton } from './LightBoxButtons'

/**
 * Lighbox slideshow for gifs component.
 */
export default class LightBoxSlideShow extends React.Component {
	constructor( props ) {
		super( props )
	}
	
	render() {
		return (
			<div className="modal-container">
				
				<div className={ `modal ${ this.props.isOn ? 'show-modal' : '' }` }>
					<div className="modal-content-wrapper">
						
						<LightBoxCloseButton onClick={ this.props.toggleModal } />
						<LightBoxContent view={ this.props.gif } />
				    	<LightBoxNavButton direction="left" onClick={ event => this.props.prevSlide() } />
				    	<LightBoxNavButton direction="right" onClick={ event => this.props.nextSlide() } />
				    	
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