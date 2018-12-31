import LightBoxWindow from './LightBoxWindow'
import LightBoxContent from './LightBoxContent'
import LightBoxGifImage from './LightBoxGifImage'
import LightBoxImageError from './LightBoxImageError'
import Loading from '../Shared/LoadingAnimation'
import { LightBoxCloseButton, LightBoxNavButton } from './LightBoxButtons'

/**
 * Lighbox slideshow for gifs component.
 */
export default class LightBoxSlideShow extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			gif: null,
			isOpen: false,
			imageReady: false,
			isError: false,
			currentIndex: false
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.onKeyDownHandler, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.onKeyDownHandler, false);
	}

	componentDidUpdate( prevProps ) {
		// Open 
		if( this.props.index !== false && this.state.isOpen === false ) {
			this.openSlideShow( this.props.gifs[ this.props.index ] )
			this.setState({ currentIndex: this.props.index })
		}
		
		// Close
		if( this.props.index === false && this.state.isOpen ) {
			this.setState({ isOpen: false })
		}

	}

	onKeyDownHandler = event => {

		if( this.state.gif && event.key === "Escape" ) {
			this.closeSlideShow()
		}
		if( this.state.gif && event.key === "ArrowRight" ) {
			this.nextSlide()
		}
		if( this.state.gif && event.key === "ArrowLeft" ) {
			this.prevSlide()
		}
		
	}

	preloadImage = ( imageSrc ) => {
		var PreloadRequest = new Promise(( resolve, reject ) => {
			let img = new Image();
			img.onload = ( event ) => resolve('Image loaded')
			img.onerror = ( event ) => reject('error')
			img.src = imageSrc;
		})

		return PreloadRequest;
	}

	closeSlideShow = event => {
		this.setState({
			imageReady: false
		})
		this.props.unsetSelectedGif()
	}
	openSlideShow = ( gif ) => {

		this.setState({ gif, isOpen: true });
		
		this.preloadImage( gif.images.original.url ).then(( result ) => {
			this.setState({ imageReady: true })
		});
	}

	nextSlide = event => {
		var index = this.state.currentIndex + 1

		this.navigateToSlide( index )
	}
	
	prevSlide = event => {
		var index = this.state.currentIndex - 1
		
		this.navigateToSlide( index )
	}

	navigateToSlide = ( index ) => {
		this.setState({
			imageReady: false,
			gif: null
		})

		console.log('navigateToSlide', index );

		if( this.props.gifs[ index ]) {
			const gif = this.props.gifs[ index ]

			this.setState({ gif, currentIndex: index })

			this.preloadImage( gif.images.original.url ).then(( result ) => {
				this.setState({ imageReady: true })
			});
		}
		else {
			this.closeSlideShow()
		}
	}

	
	render() {
		
		if( ! this.props.gifs ) return ''; // do not render until gifs are ready

		return (
			<LightBoxWindow open={ this.state.isOpen }>
				
				<LightBoxCloseButton onClick={ this.closeSlideShow } />
					
					<LightBoxContent>

						{
							!this.state.imageReady && !this.state.isError ?
								<Loading 
									color="#000" 
									loading={ true } 
								/>
							: ''
						}

						{	
							this.state.imageReady ?
								<LightBoxGifImage 
									src={ this.state.gif.images.original.url } 
									href={ this.state.gif.bitly_gif_url } 
								/>
							: ''
						}

						{ 
							this.state.isError ?
								<LightBoxImageError
									message="There was an error while loading this gif"
								/>
							:''
						}

					</LightBoxContent>
		    	
		    	<LightBoxNavButton 
		    		direction="left" 
		    		onClick={ this.prevSlide } 
		    	/>
		    	
		    	<LightBoxNavButton 
		    		direction="right" 
		    		onClick={ this.nextSlide } 
		    	/>

		    </LightBoxWindow>
		)
	}
}