import { useDispatch, useSelector } from "react-redux"

import { removeBook } from "./actions"

const BookSummary = () => {
    const dispatch = useDispatch()
    const booksList = useSelector(state => state.books)

   const removeBookHandler = (bookId) => {
    dispatch(removeBook(bookId))
   }

    return (
        <div>
            <h2>Library Summary</h2>
            <p>Total Books: <span>{booksList.length}</span></p>
            <ul>
                {booksList && 
                    booksList.map(book => 
                        <li key={book.id}>{book.title} by {book.author} (ISBN: {book.isbn})
                            <button onClick={() => {removeBookHandler(book.id)}}>Remove</button></li>)
                }
            </ul>
        </div>
    )
}

export default BookSummary