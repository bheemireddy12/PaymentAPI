
const fetchData = require('./dataGetters/fetchData');
const getFee = require('./calculations/getFee');

async function processing(data) {
  const hostName = 'http://localhost.bheemi.com';

  return await (async () => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const transaction = data[i];
  
      // API URLs dictionary
      const urlAPIs = {
        'cash_in': `${hostName}/config/cash-in`,
        'cash_out': `${hostName}/config/cash-out/${transaction.user_type}`,
      }
  
      // fetch data from API and calculate fee
      const feeConfiguration = await fetchData(urlAPIs[transaction.type]);
      const resultI = getFee(transaction, feeConfiguration);
  
      console.log(resultI);
      result.push(resultI);
    }
    return result;
  })();
}

module.exports = processing;
