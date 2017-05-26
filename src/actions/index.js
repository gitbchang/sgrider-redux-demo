export function selectBook(book) {
  //book is an object with a title
  // selectBoook is an action creator, it needs to return an action
  // action is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}