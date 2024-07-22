import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import * as API from './PixibayApi';
import toast, { Toaster } from 'react-hot-toast';




class App extends Component {
    state = {
        images: [],
        query: '',
        currentPage: 1,
        isLoading: false,
        error: null,
        totalPages: 0,
    };

    componentDidUpdate(_, prevState) {
        if (prevState.query !== this.state.query ||
            prevState.currentPage !== this.state.currentPage) {
            this.addImages();
            }
    }

    loadMore = () => {
        this.setState(prevState => {
            return {
                currentPage: prevState.currentPage + 1,
            }
        })
    }


    handleSubmit = newQuery => {
        this.setState({
            query: newQuery,
            images: [],
            currentPage: 1,
        });
    };

    addImages = async () => {
        const { query, currentPage } = this.state;
        try {
            this.setState({ isLoading: true });

            const data = await API.getImages(query, currentPage);

            if (data.hits.length === 0) {
                return toast.success('Sorry image not found...');
            };

            const normalizedImages = API.normalizedHits(data.hits);

            this.setState(prevState => ({
                images: [...prevState.images, ...normalizedImages],
                isLoading: false,
                error: '',
                totalPages: Math.ceil(data.totalHits / 12),
                
            }))
        } catch(error) {
            toast.error('Something went wrong!');;
        } finally {
            this.setState({ isLoading: false });
        }
    };


    render() {
        const { images,totalPages,currentPage, isLoading} = this.state;
        return (
            <div>
                <SearchBar onSubmit = {this.handleSubmit}/>

                {images.length > 0 ? (
                    <ImageGallery images={images} />) :
                (<p class='gallery-text'>Image gallery is empty...</p>)}
                

                {isLoading && (<Loader/>)}

                {images.length > 0 && totalPages !== currentPage &&
                    (<Button onClick={this.loadMore} />)} 
                
                <Toaster/>
            </div>
        )
    } 
}

export default App;


