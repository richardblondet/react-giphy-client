import { PRIMARY_BLUE, LIGHT_GREY, SECONDARY_GREY } from "../../config/colors"
/**
 * Custom component message for no gifs
 * @return {object}
 */
export const GiftListEmpty = () => {
	return (
		<React.Fragment>
			<div className="rgc-gifs_list--empty">No gifs Found</div>
			<style jsx>{`
				.rgc-gifs_list--empty {
					width: 100%;
					padding: 5em;
					text-align: center;
					font-size: 1.5em;
					font-weight: 600;
					color: #e2e2e2;
					text-transform: uppercase;
				}
			`}</style>
		</React.Fragment>
	)
}

/**
 * Gif list container
 * @param  {opbject} props 
 * @return {object} for react component
 */
export const GiftList = ( props ) => {
	return (
		<React.Fragment>
			<div className="rgc-gifs_list--text--status">{ props.showing && props.showing }</div>
			<div className="rgc-gifs_list">
				{ props.children }
			</div>
			<style jsx>{`
				.rgc-gifs_list--text--status {
					padding: 10px;
					font-weight: 600;
					color: ${ SECONDARY_GREY };
				}
				.rgc-gifs_list {
					column-count: 3;
					column-gap: 1em;
				}
				:global( .rgc-gif_item ) {
					display: inline-block;
				    margin: 0 0 1em;
				    width: 100%;
				}
				:global( .rgc-gif_item img ) {
					width: 100%;
					height: auto;
					vertical-align: middle;
				}
			`}</style>
		</React.Fragment>
	)
}
