// Singleton service to store the past 100 activites
const history = [];

let numberOfHistoryItems = 100;

module.exports = {

  getHistory: () => {
    return history;
  },

  setNumberOfHistoryItems: number => {
    numberOfHistoryItems = number;
  },

  addItemToHistory: item => {
    history.push({ ...item, date: Date.now() });
    history.splice( Math.max(0, history.length - numberOfHistoryItems), numberOfHistoryItems);
  }

};
