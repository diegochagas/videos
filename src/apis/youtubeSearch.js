import axios from 'axios';

const API_KEY = 'AIzaSyA23m5YJbOR0mNX2bpIXM5RxFEOgGgAYt0';

const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: API_KEY
  }
});

export default youtubeSearch;