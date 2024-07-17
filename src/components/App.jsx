import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';



export class App extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
    };

    loadMore = () => {
        this.setState(prevState => {
            return {
                page: prevState.page + 1,
            }
        })
    }


    handleSubmit = newQuery => {
        this.setState({
            query: newQuery,
            images: [],
            page: 1,
        });
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit = {this.handleSubmit}/>

                <div>gallery</div>

                <button onClick = {this.loadMore}>Load more</button>
            </div>
        )
    } 
}

export default App;
