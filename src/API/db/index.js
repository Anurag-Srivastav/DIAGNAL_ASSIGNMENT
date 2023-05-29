import { MOVIE_POSTER } from '../../assets';
import data1 from '../CONTENTLISTINGPAGE-PAGE1.json';
import data2 from '../CONTENTLISTINGPAGE-PAGE2.json';
import data3 from '../CONTENTLISTINGPAGE-PAGE3.json';

const page1Data = data1.page['content-items'].content;
const page2Data = data2.page['content-items'].content;
const page3Data = data3.page['content-items'].content;

const searchData = [...page1Data, ...page2Data, ...page3Data];

const getData = (pageNum) => {
    switch (pageNum) {
        case 1:
            return data1.page;
        case 2:
            return data2.page;
        case 3:
            return data3.page;
        default: 
            return [];
    }
}

const getSearchResults = (searchQuery) => {
    return searchData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
}

const getMoviePoster = imgname => {
    const img = imgname.split('.');
    if (MOVIE_POSTER[img[0].toString()]) return MOVIE_POSTER[img[0].toString()]
    return MOVIE_POSTER.noPoster;
};

export { getData, getSearchResults, getMoviePoster }