import React from 'react'

const GlobalStyles = `
	html, body {
		font-family: 'Poppins', sans-serif;
	}
`
export default ( props ) => (
	<React.Fragment>
		<style jxs global>{ GlobalStyles }</style>
	</React.Fragment>
)