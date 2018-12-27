export default ( props ) => {
	return (
		<React.Fragment>
			<li className="rgc-gif_item">
				<a>
					<img src={ props.gif.images.fixed_width_still.url } />
				</a>
			</li>
			<style jxs>{`
				.rgc-gif_item {
					display: inline-block;
				    margin: 10px 5px 0 5px;
				    vertical-align: top;
				    height: 250px;
				}
				.rgc-gif_item > a {
					border: none;
				    outline: none;
				    display: block;
				    position: relative;
				}
				.rgc-gif_item > a img {
					border: none;
					outline: none;
					display: block;
					position: relative;
				}
			`}</style>
		</React.Fragment>
	)
}