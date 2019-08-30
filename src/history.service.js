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
    const historyItem = {
      ...item
    };

    historyItem.date = Date.now();

    history.push(historyItem);

    if (history.length > numberOfHistoryItems) {
      history.splice(history.length - numberOfHistoryItems, numberOfHistoryItems);
    }
  }
};
