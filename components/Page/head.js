import Head from 'next/head'
import CustomResetCSS from './reset-css'
import GlobalStyles from './global-styles'

/**
 * Head component
 * @param  {object} props 
 * @return {object}       Component
 */
export default ( props ) => {

	return (
		<React.Fragment>
			<Head>
				<CustomResetCSS />
				<title>{ props.title || 'React Giphy Client' }</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0, maximum-scale=1.0" />
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" /> 
			</Head>
			<GlobalStyles bgColor="white" />
		</React.Fragment>
	)
}