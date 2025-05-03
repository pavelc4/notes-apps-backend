const { nanoid } = require('nanoid');
const notes = require('./notes');


const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createAt = new Date().toISOString();
  const updateAt = createAt;

  const newNote = {
    title, tags, body, createAt, updateAt,
  };
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: success,
      message: 'Successfully added!',
      data: {
        noteId: id,
      }
    });
    response.code(20);
    return response;
  }
  const response = h.response({
    status: 'failed',
    message: 'Failed to add note',
  });
  response.code(500);
  return response;
};

module.exports = { addNoteHandler };