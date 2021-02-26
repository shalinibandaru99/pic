import axios from 'axios';


  export default axios.create({
     baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID g3NF2If6yjLwvT8gZL4wUP_cRAM5gzVhg5WoWNpDcaQ',
      }
});