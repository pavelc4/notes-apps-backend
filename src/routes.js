const { addNoteHandler } = require('./handler');


const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {

    }
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

];


module.exports = routes;