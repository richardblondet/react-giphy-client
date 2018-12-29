import React from 'react'

/**
 * Default global styles
 * @param  {object} props 
 * @return {object}       Component
 */
export default ( props ) => (
	<React.Fragment>
		<style jxs="true" global="true">{`
			html, body {
				font-family: Poppins, sans-serif;
				background-color: ${props.bgColor};
			}
		`}</style>
	</React.Fragment>
)