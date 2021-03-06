import { Component }  from 'react'
import Head from './head'
import ScrollToTop from '../ScrollToTop'

/**
 * Higher compoent for simple page control
 */
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
				<ScrollToTop />
			</React.Fragment>
		)
	}
}