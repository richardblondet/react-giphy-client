export default ( props ) => {
	const { view } = props

	if( view && !'images' in view ) return;

	return (
		<div className="modal-content">
			<div className="modal-gif">
				<img src={ view.images.original.url } />
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
				    max-width: 935px;
				    transition: width 0.3s cubic-bezier(.25,.8,.25,1);
				}
			`}</style>
		</div>
	)
}