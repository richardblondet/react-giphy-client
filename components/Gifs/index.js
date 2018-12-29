import GifImage from './GifImage'
import { GiftListEmpty, GiftList } from './GifContainer'

/**
 * Gif Container for passing data and controlling scrolling behavior
 */
export default class Gifts extends React.Component {
	
	constructor( props ) {
		super( props )
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
	}
	
	handleScroll = ( event ) => {

		if ( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight) && this.props.gifs.length ) {
			this.props.loadMeSomeMoreMagic();
		}
	}
	
	openGif = ( index ) => {
		this.props.onGifClick( index )
	}

	render() {
		const { showing } = this.props

		const GIFS = this.props.gifs && this.props.gifs.map(( image, index ) => {
			return <GifImage key={ image.id + index } gif={ image } openGif={ this.openGif } indx={ index } />
		});

		return GIFS && GIFS.length ? <GiftList onScroll={ this.handleScroll } showing={ showing }>{ GIFS }</GiftList> : <GiftListEmpty />
	}
}