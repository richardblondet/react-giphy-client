import { FiX } from "react-icons/fi";

export default class LightBox extends React.Component {
	constructor() {
		super()

		this.state = {
			isOn: false
		}
	}
	toggleModal = () => {
		this.setState({
			isOn: !this.state.isOn
		})
	}
	render() {
		return (
			<div className="modal-container">
				<button className="trigger" onClick={ this.toggleModal }>Click here to trigger the modal!</button>
				<div className={ `modal ${ this.state.isOn ? 'show-modal' : '' }` }>
					<div className="modal-close-button" onClick={ this.toggleModal }>
						<button> <FiX /> </button>
					</div>
				    <div className="modal-content">
				    	<div className="modal-gif">
				    		<img src="https://media1.giphy.com/media/3oz8xKEQllRI0hOnUk/giphy.gif" />
				    	</div>
				    </div>
				</div>
				<style jsx>{`
					.modal {
					        position: fixed;
					        left: 0;
					        top: 0;
					        width: 100%;
					        height: 100%;
					        background-color: rgba(0, 0, 0, 0.5);
					        opacity: 0;
					        visibility: hidden;
					        transform: scale(1.1);
					        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
					    }
					    .modal-content {
					        position: absolute;
					        top: 50%;
					        left: 50%;
					        transform: translate(-50%, -50%);
					        background-color: white;
					        padding: 1rem 1.5rem;
					        width: auto;
					        max-width: 935px;
					        transition: width 0.3s cubic-bezier(.25,.8,.25,1);
					    }
					    .modal-close-button {
					        position: absolute;
					        right: 10px;
					        top: 10px;
					        font-size: 34px;
					    }
					    .modal-close-button button {
					        border: none;
					        background-color: transparent;
					        border-radius: 4px;
					        padding: 2px 9px;
					        font-weight: 600;
					        color: #fff;
					    }
					    .show-modal {
					        opacity: 1;
					        visibility: visible;
					        transform: scale(1.0);
					        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
					        z-index: 100;
					    }
				`}</style>
			</div>
		)
	}
}