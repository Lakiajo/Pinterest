import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

const bindEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boards-page').classList.remove('hide');
    document.getElementById('pins-page').classList.add('hide');
  });
};

const printPins = (pins) => {
  let domstring = '';
  pins.forEach((pin) => {
    domstring += `<img src="${pin.imageUrl}" alt="pin Image">`;
  });
  util.printToDom('pins-on-board', domstring);
};

const initPins = (boardId) => {
  bindEvents();
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error('All pins', pins);
      printPins(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
