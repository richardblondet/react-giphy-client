import SearchInput from './StyledInput'

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
                <SearchInput placeholder="Enter text to search for gifs!" onChange={ this.handleOnChangeEvent } isLoading={ this.state.textquery.length > 1 } />
            </React.Fragment>
        );
    }
}