import Gifs from '../Gifs'
import LightBoxSlideShow from './LightBoxSlideShow'

export default class GifsLightBoxGallery extends React.Component {
	
	constructor( props ) {
		super( props )

		this.state = {
			isOn: this.props.gif ? true:false,
			gif: null
		}
	}

	toggleModal = () => {
		this.setState({
			isOn: !this.state.isOn
		})
	}

	startGifSlideShow = ( gif ) => {
		this.setState(( prevS, props ) => ({
			gif
		}))
		this.toggleModal()
	}

	render() {
		const {
			gifs,
			showing,
			loadMeSomeMoreMagic
		} = this.props 

		return (
			<div>
				
				<Gifs 	
					gifs={ gifs } 
                    showing={ showing } 
                    loadMeSomeMoreMagic={ loadMeSomeMoreMagic } 
                    onGifClick={ this.startGifSlideShow } />
				
				{ 
					this.state.isOn ?
						<LightBoxSlideShow isOn={ this.state.isOn } toggleModal={ this.toggleModal } gif={ this.state.gif } />
					:
						<div></div>
				}
			</div>
		)
	}
}