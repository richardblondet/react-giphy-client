export default class GifImage extends React.Component {
	
	constructor( props ) {
		super( props )

		this.state = {
			cached: false,
			elem: null
		}
	}

	handleOnMouseEnter = event => {
		if( this.state.cached ) return;

		console.log('cached')
		const img = document.createElement( 'img' )
		img.src = this.props.gif.images.original.url
		
		this.setState({
			cached: true,
			elem: img
		})
	}

	componentWillUnmount() {
		this.setState({
			elem: null,
			cached: false
		})
	}

	render() {

		const { props } = this

		const { width, height, url } = props.gif.images.fixed_height_still

		const gifStyle = { 
			gridRowEnd: ( height / width ) > 1.8 ? 'span 2' : 'span 1', 
			gridColumnEnd: ( width / height ) > 1.8 ? 'span 2' : 'span 1' 
		}

		return (
			<div 
				className="rgc-gif_item" 
				style={ gifStyle }
				onClick={ () => props.openGif( props.indx ) }
			>
				<img src={ url } style={{ flex: ( width / height ) }} onMouseEnter={ this.handleOnMouseEnter } />
			</div>
		)
	}
}