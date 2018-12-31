import Loading from '../Shared/LoadingAnimation'
import { SECONDARY_GREY }  from '../../config/colors'

/**
 * Content for the lightbox. Controls if gif is shown succesfully
 */
export default class LightBoxContent extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			isReady: false,
			error: false
		}

		this.preloadImage()
	}

	onLoadHandler = event => {
		this.setState({
			isReady: true
		})
	}

	preloadImage = () => {
		let img = new Image()
		img.onload = this.onLoadHandler
		img.onerror = this.onErrorHandler
		img.src = this.props.image
	}

	onErrorHandler = event => {
		this.setState({
			isReady: true,
			error: true
		})
	}

	render() {

		const { image, url } = this.props

		return ( 
				
			<div className="modal-content">
				<div className="modal-gif">
				
				{	
					this.state.isReady && !this.state.error ?
						<a
							href={ url } 
							target="_blank">
							
							<img 
								src={ image }
							/>
						
						</a>
					:

					<Loading 
						color="#000" 
						loading={ true } 
					/>

				}

					{ this.state.error ? <p className="image-error"> There was an error while loading this gif </p> : '' }
				</div>
				<style jsx>{`
					.modal-content {
					    position: absolute;
					    top: 50%;
					    left: 50%;
					    transform: translate(-50%, -50%);
					    background-color: white;
					    padding: 1rem 1.5rem;
					    width: auto;
					    max-width: 470px;
					    transition: width 0.3s cubic-bezier(.25,.8,.25,1);
					}
					.image-error {
					    text-align: center;
					    color: ${ SECONDARY_GREY };
					}
					@media ( min-width: 990px ) {
						.modal-content {
							max-width: 935px;
						}
					}
				`}</style>
			</div>

		)
	}
}