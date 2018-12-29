export default ( props ) => {

	const { width, height, url } = props.gif.images.fixed_height_still

	return (
		<div className="rgc-gif_item" style={{ gridRowEnd: ( height / width ) > 1.8 ? 'span 2' : 'span 1', gridColumnEnd: ( width / height ) > 1.8 ? 'span 2' : 'span 1' }}>
			<img src={ url } style={{ flex: ( width / height ) }} />
		</div>
	)
}