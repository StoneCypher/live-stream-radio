let history = [],
  numberOfHistoryItems = 3;

const getHistory = () => history,
  setNumberOfHistoryItems = number => (numberOfHistoryItems = number);

function addItemToHistory(item) {
  history.push({ ...item, date: Date.now() });
  while (history.length > numberOfHistoryItems) {
    history.shift();
  }
}

module.exports = { getHistory, setNumberOfHistoryItems, addItemToHistory };
