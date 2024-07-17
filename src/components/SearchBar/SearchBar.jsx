import { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
    inputValue: '',
  }

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value.trim();
    this.props.onSubmit(searchQuery);
    evt.target.reset();
  }
  


    render() {
        return (
            <header>
              <form onSubmit = {this.handleSubmit}>
                <button type="submit" class="button">
                  <span>Search</span>
                </button>

                <input
                  type="text"
                  autocomplete="off"
                  autofocus
                  placeholder="Search images and photos"
                  value={this.state.inputValue}
                  onChange = {this.handleChange}
                />
              </form>
            </header>
        )
    }
}

export default SearchBar;