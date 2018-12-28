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
					box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
					transition: all 0.3s cubic-bezier(.25,.8,.25,1);
				}
				.rgc-input:focus {
					box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
				}
		 	`}</style>
		</React.Fragment>
	)
}