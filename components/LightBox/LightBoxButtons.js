import { FiX, FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const LightBoxCloseButton = ( props ) => {
	return (
		<div className="modal-close-button">
			<button onClick={ props.onClick }><FiX /></button>

			<style jsx>{`
				.modal-close-button {
				    position: absolute;
				    right: 10px;
				    top: 10px;
				    font-size: 34px;
				}
			`}</style>
		</div>
	)
}

export const LightBoxNavButton = ( props ) => {
	const { direction } = props

	const Icons = {
		left: FiChevronLeft,
		right: FiChevronRight
	}

	const Icon = Icons[ props.direction || 'left' ]

	return (

		<div className={`modal-navigation-button modal-navigation-button--${ props.direction }`}>
			<button onClick={ props.onClick }><Icon /></button>

			<style jsx>{`
				.modal-navigation-button {
					font-size: 34px;
					position: absolute;
				    bottom: 50%;
				}
			`}</style>
		</div>
	)
}