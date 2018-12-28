export default ( props ) => {
	return (
		<React.Fragment>
			<div className="rgc-container">{ props.children }</div>
			<style jsx>{`
				.rgc-container {
					width: 100%;
				  	padding-right: 15px;
				  	padding-left: 15px;
				  	margin-right: auto;
				  	margin-left: auto;
				}

				// Small devices (landscape phones, 576px and up)
				@media (min-width: 576px) { ... }

				// Medium devices (tablets, 768px and up)
				@media (min-width: 768px) {
					.rgc-container {
						width: ${ props.width ? props.width : '100%' };
						padding-top: ${ props.pt ? props.pt : 0 };
						padding-bottom: ${ props.pb ? props.pb : 0 };
						padding-left: ${ props.pl ? props.pl : '15px' };
						padding-right: ${ props.pr ? props.pr : '15px' };

						margin-top: ${ props.pt ? props.pt : 0 };
						margin-bottom: ${ props.pb ? props.pb : 0 };
					}
				}
			`}</style>
		</React.Fragment>
	)
}