import GifImage from './GifImage'
import { GiftListEmpty, GiftList } from './GifContainer'

export default class Gifts extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {
		const { showing } = this.props

		const GIFS = this.props.gifs && this.props.gifs.map(( image ) => {
			return <GifImage key={ image.id } gif={ image } />
		});

		return GIFS && GIFS.length ? <GiftList showing={ showing }>{ GIFS }</GiftList> : <GiftListEmpty />
	}
}