import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0dd22bac11254a89b269a52171c6c0d8'
    }
})