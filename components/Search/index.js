import SearchInput from './StyledInput'

/**
 * Search bar compoent for searching
 */
export default class SearchBar extends React.Component {
	
    constructor( props ) {
        super( props );
        
        this.state = { 
        	textquery: '' 
        }
    }

    handleOnChangeEvent = ( event ) => {
        const textquery = event.target.value;
        
        this.setState({
            textquery: textquery
        })
        
        this.props.handleTextQueryChange && this.props.handleTextQueryChange( textquery );
    }
    
    render() {
        return (
            <React.Fragment>
                <SearchInput placeholder="Type to find a gif" onChange={ this.handleOnChangeEvent } loading={ this.props.isLoading ? 'true':null } />
            </React.Fragment>
        );
    }
}