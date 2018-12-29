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
	}

	onLoadHandler = event => {
		this.setState({
			isReady: true
		})
	}

	onErrorHandler = event => {
		this.setState({
			isReady: true,
			error: true
		})
	}

	render() {

		const { view } = this.props

		if( view && !'images' in view ) return;

		return ( 
				
			<div className="modal-content">
				<div className="modal-gif">
					<a href={ view.bitly_url } target="_blank">
						<img src={ view.images.original.url } onLoad={ this.onLoadHandler } onError={ this.onErrorHandler } style={{ display: this.state.isReady ? 'block':'none' }} />
					</a>
					<Loading color="#000" loading={ !this.state.isReady } />
					{ this.state.error ? ( <p className="image-error"> There was an error while loading this gif </p> ) : '' }
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