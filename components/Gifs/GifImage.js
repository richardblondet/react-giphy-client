export default ( props ) => {
	const gif_aspect_ratio = ( width, height) => {
		return width/height;
	}

	return (
		<React.Fragment>
				<div className="rgc-gif_item">
					<img src={ props.gif.images.downsized_still.url } />
				</div>
			<style jxs="true">{`
				.rgc-gif_item {
					flex: ${ gif_aspect_ratio( props.gif.images.downsized_still.width, props.gif.images.downsized_still.height ) };
					margin: .5em;
				}
				.rgc-gif_item img {
					width: 100%;
					height: auto;
					vertical-align: middle;
				}
			`}</style>
		</React.Fragment>
	)
}