export default ( props ) => {
	return (
		<React.Fragment>
		 	<input className="rgc-input" {...props} />
		 	
		 	<style jsx>{`
				.rgc-input {
					background-color: #fbfbfc;
					border: solid 1px #eef1f5;
					padding: 1em;
					color: #000;
					width: 100%;
				}
		 	`}</style>
		</React.Fragment>
	)
}