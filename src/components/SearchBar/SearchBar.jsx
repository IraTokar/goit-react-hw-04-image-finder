import { useState } from 'react';
import PropTypes from 'prop-types';
import { Searchbar, Form, FormButton, ButtonText, FormInput } from './SearchBar.styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
            <Searchbar>
              <Form onSubmit = {handleSubmit}>
              <FormButton type="submit" class="button">
                  <BsSearch />
                  <ButtonText>Search</ButtonText>
                </FormButton>

                <FormInput
                  name="query"
                  type="text"
                  placeholder="Search images and photos"
                  value={inputValue}
                  onChange = {handleChange}
                />
              </Form>
            </Searchbar>
        )
}

// class SearchBar extends Component {
//   state = {
//     query: '',
//     inputValue: '',
//   }

//   handleChange = evt => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const searchQuery = evt.target.elements.query.value.trim();
//     this.props.onSubmit(searchQuery);
//     evt.target.reset();
//   }


//     render() {
//         return (
//             <Searchbar>
//               <Form onSubmit = {this.handleSubmit}>
//               <FormButton type="submit" class="button">
//                   <BsSearch />
//                   <ButtonText>Search</ButtonText>
//                 </FormButton>

//                 <FormInput
//                   name="query"
//                   type="text"
//                   placeholder="Search images and photos"
//                   value={this.state.inputValue}
//                   onChange = {this.handleChange}
//                 />
//               </Form>
//             </Searchbar>
//         )
//     }
// };

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default SearchBar;








