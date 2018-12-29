export default ( props ) => {
	
	const { color, borderWidth, loading } = props
	
	return (
		<React.Fragment>
			<div className="rgc-loading-animation"></div>
		 	<style jsx>{`
		 		.rgc-loading-animation {
					display: ${ loading ? 'inline-block' : 'none' };
					width: 58px;
					height: 58px;
				}
				.rgc-loading-animation:after {
					content: " ";
					display: block;
					width: 30px;
					height: 30px;
					margin: 1px auto;
					border-radius: 50%;
					border: ${ borderWidth ? borderWidth : '3px' } solid ${ color };
					border-color: ${ color } transparent ${ color } transparent;
					animation: rgc-loading-animation 1.2s linear infinite;
					top: 14px;
				    position: relative;
				}
				@keyframes rgc-loading-animation {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
		 	`}</style>
		</React.Fragment>
	)
}