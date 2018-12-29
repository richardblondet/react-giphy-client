import { FiImage } from "react-icons/fi";

/**
 * Simple logo for this app.
 * @return {object} Component
 */
export default () => {
	return (
		<div className="rgc-logo">
			<span className="rgc-logo--icon">
				<FiImage />
			</span>
			<span className="rgc-logo--type">
				gifinder
			</span>
			<style jsx>{`
				.rgc-logo {
					font-size: 1.75em;
					text-align: center;
					padding: 1em;
				}
				.rgc-logo--type,
				.rgc-logo--icon {
				    margin: .25em;
				}
				.rgc-logo--icon {
				    color: #55abff;
				}
				.rgc-logo--type {
				    font-weight: 600;
				}
			`}</style>
		</div>
	)
}