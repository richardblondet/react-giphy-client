export default ( props ) => {
	const { width, height, url } = props.gif.images.downsized_still;

	return (
		<div className="rgc-gif_item">
			<img src={ url } />
		</div>
	)
}
// style={{ flex: gif_aspect_ratio( props.gif.images.downsized_still.width, props.gif.images.downsized_still.height ) }}
// style={{ backgroundImage: `url( ${ props.gif.images.downsized_still.url } )` }}
// style={{ width: `${ width }px`, height: `${ height }px` }}