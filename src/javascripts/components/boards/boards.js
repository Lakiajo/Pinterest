import boardsData from '../../helpers/data/boardsData';
import 'bootstrap';
import util from '../../helpers/util';
import pins from '../pins/pins';

// Callback function shows or hides the pins.
const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('THis!', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

// Binds callback to the buttons and takes you to the seleceted pins page.
const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

// Builds Cards
const boardBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id="${board.id}" class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '<button class="btn btn-info see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

// Prints cards
const initBoards = () => {
  console.error('Lakia');
  boardsData.loadBoards()
    .then((resp) => {
      // console.error('resp', resp.data.boards);
      boardBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards, boardBuilder };
