const dayjs = require('dayjs');

module.exports = {
    format_date: date => {
      return dayjs().startOf('month').add(1, 'day').set('year', 2018).format('MM-DD-YYYY');
      
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    }
  };