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
			<div className="rgc-gifs_list">{ props.children }</div>
			<style jsx>{`
				.rgc-gifs_list {
					display: flex;
					padding: 1em .5em;
				}
			`}</style>
		</React.Fragment>
	)
}
