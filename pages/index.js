import Page from '../components/Page'
import SearchBar from '../components/Search'

export default class Index extends React.Component {
	
	constructor() {
        super();

        this.state = {
            gifs: []
        }
    }

    gitfSearchHandler = (  text  ) => {
    	console.log( text  );
    }

	render() {
		return (
			<Page>
				<SearchBar handleTextQueryChange={ this.gitfSearchHandler } />
			</Page>
		)
	}
}