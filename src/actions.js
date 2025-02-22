export const addBook = (book) => ({
    type: "ADD_BOOK",
    payload: book
})

export const removeBook = (bookId) => ({
    type: "Remove_BOOK",
    payload: bookId
})