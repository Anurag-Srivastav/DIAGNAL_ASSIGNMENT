import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Image, StatusBar, Dimensions, SafeAreaView } from 'react-native';
import { getData, getMoviePoster, getSearchResults } from '../../API/db';
import { ICON } from '../../assets';
import useDebounce from '../../CustomHook/useDebounce';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import styles from './styles';
import { STRING } from '../../utils/String';
import { COLORS } from '../../utils/Colors';

/**
 * 
 * Function to return an Empty Component in case of an empty data
 */

const EmptyComponent = () => {
    return (
        <View style={styles.emptyContainer}>
            <Image
                source={ICON.search}
                style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>{STRING.emptyText}</Text>
        </View>
    )
}

/**
 * 
 * @returns JSX to return Home Page UI
 */

const HomePage = () => {

    /**
     * Initalizing states 
     */

    const [movieData, setMovieData] = useState({
        hasMore: true,
        movieList : []
    });
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    /**
     * Custom Hook to implement debouncing of 300 sec to avoid search as user types along
     */
    const lazySearch = useDebounce(search, 300);

    const flatListRef = useRef();

    /**
     * Function to move scrollList to the top when user performs search
     */
    const scrollToTop = () => {
        flatListRef?.current?.scrollToOffset({ animated: false, y: 0 });
    }

    /**
     * 
     * @param {*} page 
     * Function to return the paginated Movie Data
     */
    const getMovieList = (page) => {
        const data = getData(page);
        const movieArray = data['content-items'].content;
        if(page === 1 ){
            setMovieData({
                hasMore: data['page-size-requested'] === data['page-size-returned'],
                movieList : [...movieArray]
            });
        }
        else{
            setMovieData({
                hasMore: data['page-size-requested'] === data['page-size-returned'],
                movieList : [...movieData.movieList, ...movieArray]
            });
        }
    }

    /**
     * Page number handling to implement lazy loading of the JSON
     */
    useEffect(() => {
       getMovieList(page)
    }, [page])



    const refreshList = () => {
        if (page === 1) {
            getMovieList(1);
        }
        else {
            setPage(1);
        }
        scrollToTop();
    }

    /**
     * Function to handle the search operation 
     */
    useEffect(() => {
        if (lazySearch) {
            const searchData = getSearchResults(lazySearch);
            setMovieData({
                hasMore: true,
                movieList : searchData
            });
            scrollToTop();
        }
        else {
            refreshList();
        }
    }, [lazySearch])

    /**
     * 
     * render item function for each element in the Array
     */
    const renderItem = ({ item }) => {
        const poster = getMoviePoster(item['poster-image'])
        return (
            <MovieCard
                poster={poster}
                name={item.name}
            />
        )
    }

    /**
     * 
     * @returns Function to handle empty Data
     */
    const renderEmptyComponent = () => {
        return (
           <EmptyComponent />
        )
    }

    /**
     * Function to increase the page number 
     */
    const loadMore = () => {
        if (movieData.hasMore && lazySearch === '') {
            setPage(page + 1)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <StatusBar barStyle={'light-content'}  backgroundColor={COLORS.black}/>
                <Header
                    setSearch={setSearch}
                    search={search}
                />
                <FlatList
                    data={movieData.movieList}
                    ref={flatListRef}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    ListEmptyComponent={renderEmptyComponent}
                    onEndReachedThreshold={0.5}
                    onEndReached={loadMore}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomePage;