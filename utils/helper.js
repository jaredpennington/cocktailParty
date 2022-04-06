const dayjs = require('dayjs');

module.exports = {
    format_date: date => {
      return dayjs().format('MM-DD-YYYY');
      
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    }
  };