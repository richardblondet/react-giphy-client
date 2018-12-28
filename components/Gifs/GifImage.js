export default ( props ) => {
	const gif_aspect_ratio = ( width, height) => {
		return width/height;
	}

	return (
		<div className="rgc-gif_item" style={{ flex: gif_aspect_ratio( props.gif.images.downsized_still.width, props.gif.images.downsized_still.height ) }}>
			<img src={ props.gif.images.downsized_still.url } />
		</div>
	)
}