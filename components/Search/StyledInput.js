import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { PRIMARY_BLUE, LIGHT_GREY, SECONDARY_GREY } from "../../config/colors"

export default ( props ) => {
	return (
		<div className="rgc-input-wrapper">
	 		<input className="rgc-input" { ...props } />
	 		<div className="rgc-icon-wrapper">
	 			<FiSearch className="rgc-icon icon--static" />
	 			<div className="rgc-loading-animation"></div>
	 		</div>
		 	<style jsx>{`
		 		.rgc-input-wrapper {
		 			position: relative;
		 		}
				.rgc-input {
					position: relative;
					background-color: ${ LIGHT_GREY };
					border: solid 1px ${ SECONDARY_GREY };
					padding: 1em 58px 1em 1em;
					color: #000;
					width: 100%;
					box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
					transition: all 0.3s cubic-bezier(.25,.8,.25,1);
				}
				.rgc-input:focus {
					box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
					outline: 0;
				}
				.rgc-icon-wrapper {
					position: absolute;
				    font-size: 30px;
				    top: 0;
				    right: 0;
					color: ${ PRIMARY_BLUE };
					width: 58px;
    				height: 58px;
    				text-align: center;
				}
				:global( .rgc-icon ) {
					display: ${ props.loading ? 'none' : 'inline-block' };
					position: relative;
					vertical-align: bottom;
				}
				.rgc-loading-animation {
					display: ${ props.loading ? 'inline-block' : 'none' };
					width: 58px;
					height: 58px;
				}
				.rgc-loading-animation:after {
					content: " ";
					display: block;
					width: 30px;
					height: 30px;
					margin: 1px auto;
					border-radius: 50%;
					border: 3px solid ${ PRIMARY_BLUE };
					border-color: ${ PRIMARY_BLUE } transparent ${ PRIMARY_BLUE } transparent;
					animation: rgc-loading-animation 1.2s linear infinite;
					top: 14px;
				    position: relative;
				}
				@keyframes rgc-loading-animation {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
		 	`}</style>
	 	</div>
	)
}