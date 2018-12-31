import { SECONDARY_GREY }  from '../../config/colors'

export default ( props ) => {
	const { message } = props 
	return( 
		<div>
			<p className="image-error">{ message }</p>
			<style jsx>{`
				
				.image-error {
				    text-align: center;
				    color: ${ SECONDARY_GREY };
				}
			`}</style>
		</div>
	)
}