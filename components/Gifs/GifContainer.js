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
			<ul className="rgc-gifs_list">{ props.children }</ul>
			<style jsx>{`
				.rgc-gifs_list {
					list-style: none;
				    padding: 20px 0;
				    margin: 0 auto;
				    text-align: center;
				    width: 100%;
				}
			`}</style>
		</React.Fragment>
	)
}
