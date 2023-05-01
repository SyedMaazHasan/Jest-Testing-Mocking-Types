import axios from 'axios';

export const fetchUsersData = async () => await axios.get('https://hn.algolia.com/api/v3');