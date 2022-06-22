const axios = require('axios');

export const GetDetails = () => {
    return axios.get(`https://www.therogerlab.com/examples/lists-stats.php`).then(oResult => oResult);
}