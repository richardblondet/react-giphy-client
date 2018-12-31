/**
 * Content for the lightbox. Controls if gif is shown succesfully
 */
export default class LightBoxContent extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {

		const { children } = this.props

		return ( 
				
			<div className="modal-content">
				<div className="modal-gif">
				
				{	children }

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