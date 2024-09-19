// hiding api key
require('dotenv').config();
const api_key = process.env.API_KEY;

const options = {
    headers: {
        'Content-Type':'application/json',
		    'x-access-token':`${api_key}`
	}
};

fetch('https://api.coinranking.com/v2/coin/yhjMzLPhuIDl', options)
  .then((response) => response.json())
  .then((result) => console.log(result))
