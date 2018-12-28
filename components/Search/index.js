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
                <SearchInput placeholder="Search the GIPHY database" onChange={ this.handleOnChangeEvent } loading={ this.state.textquery.length > 1 ? 'true':undefined } />
            </React.Fragment>
        );
    }
}