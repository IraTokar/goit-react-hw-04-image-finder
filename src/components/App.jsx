// import { setState, useEffect} from 'react';
// import SearchBar from './SearchBar/SearchBar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import * as API from './PixibayApi';
// import toast, { Toaster } from 'react-hot-toast';



// export const App = () => {
//     const [images, setImages] = setState([]);
//     const [query, setQuery] = setState('');
//     const [currentPage, setCurrentPage] = setState(1);
//     const [isLoading, setIsLoading] = setState(false);
//     const [totalPages, setTotalPages] = setState(0);

//     const loadMore = () => {
//         setCurrentPage(prevPage=>prevPage+1)
//     };

//     const handleSubmit = newQuery => {
//         setQuery(newQuery);
//         setImages([]);
//         setCurrentPage(1);
//     };
    

//     useEffect(() => {
//         if (query === '') {
//       return;
//     }
//         const addImages = async (query, currentPage) => {
//             try {
//                 setIsLoading(true);
//                 const data = await API.getImages(query, currentPage);

//                 if (data.hits.length === 0) {
//                     return toast.success('Sorry image not found...');
//                 };

//                 const normalizedImages = API.normalizedHits(data.hits);

//                 setImages(prevImages => [...prevImages, ...normalizedImages]);
//                 setIsLoading(false);
//                 setTotalPages(Math.ceil(data.totalHits / 12))

//             } catch (error) {
//                 toast.error('Something went wrong!');;
//             } finally {
//                 setIsLoading(false);
//             }
//         }; addImages(query, currentPage);
//         }, [query, currentPage,setImages,setIsLoading,setTotalPages]);

    
//     return (
//             <div>
//                 <SearchBar onSubmit = {handleSubmit}/>

//                 {images.length > 0 ? (
//                     <ImageGallery images={images} />) :
//                 (<p class='gallery-text'>Image gallery is empty...</p>)}
                

//                 {isLoading && <Loader/>}

//                 {images.length > 0 && totalPages !== currentPage &&
//                     <Button onClick={loadMore} />} 
                
//                 <Toaster/>
//             </div>
//         )
// }


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

