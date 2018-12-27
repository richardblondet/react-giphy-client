import React, { Component }  from 'react'
import Head from './head'

export default class Page extends Component {
	
	constructor( props ) {
		super( props )
	}
	
	render() {
		
		const { children, title } = this.props

		return (
			<React.Fragment>
				<Head />
				{ children }
			</React.Fragment>
		)
	}
}