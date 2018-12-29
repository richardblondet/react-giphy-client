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
				    <div className="modal-content">
				        <span className="close-button" onClick={ this.toggleModal }>×</span>
				        <h1>Hello, I am a modal!</h1>
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
					        width: 24rem;
					        border-radius: 0.5rem;
					    }
					    .close-button {
					        float: right;
					        width: 1.5rem;
					        line-height: 1.5rem;
					        text-align: center;
					        cursor: pointer;
					        border-radius: 0.25rem;
					        background-color: lightgray;
					    }
					    .close-button:hover {
					        background-color: darkgray;
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