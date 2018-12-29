import { FiArrowUp } from "react-icons/fi";
import { PRIMARY_BLUE, WHITE } from '../../config/colors'

export default class ScrollToTop extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			offset: 300,
			show: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = event => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		this.setState({
			show: ( scrollTop > this.state.offset ) ? true:false
		})
	}

	handleClick = event => {
		let interval = setInterval(() => {
			if ( window.pageYOffset === 0 ) {
		        clearInterval( interval );
		    }
		    window.scroll(0, window.pageYOffset - 50);
		}, 15 )
	}

	render() {
		return (
			<div className={` ScrollToTop ${ this.state.show ? 'affix' : '' }`}>
				<button onClick={ this.handleClick }> <FiArrowUp /> </button>
				<style jsx>{`
					.ScrollToTop {
						opacity: 0;
					    position: fixed;
					    bottom: 1em;
					    right: 1em;
					    transition: opacity 0.3s cubic-bezier(.25,.8,.25,1);
					}
					.ScrollToTop.affix {
						opacity: 1;
					}
					.ScrollToTop button {
					    box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
					    border: none;
					    background-color: #55abff;
					    width: 40px;
					    height: 40px;
					    font-size: 25px;
					    color: #fff;
					    border-radius: 50%;
					    cursor: pointer;
					}
					.ScrollToTop button:focus, 
					.ScrollToTop button:active {
						outline: 0;
						box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
					}
				`}</style>
			</div>
		)
	}
}