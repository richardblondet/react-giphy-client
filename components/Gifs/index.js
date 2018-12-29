import GifImage from './GifImage'
import { GiftListEmpty, GiftList } from './GifContainer'

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
	openGif = ( image ) => {
		this.props.onGifClick( image )
	}

	render() {
		const { showing } = this.props

		const GIFS = this.props.gifs && this.props.gifs.map(( image ) => {
			return <GifImage key={ image.id } gif={ image } openGif={ this.openGif } />
		});

		return GIFS && GIFS.length ? <GiftList onScroll={ this.handleScroll } showing={ showing }>{ GIFS }</GiftList> : <GiftListEmpty />
	}
}