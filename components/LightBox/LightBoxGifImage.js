export default ( props ) => {

	const { src, href } = props 
	
	return (
		<a
			href={ href } 
			target="_blank">
			
			<img 
				src={ src }
			/>
		
		</a>
	)
}