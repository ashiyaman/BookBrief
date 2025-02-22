import { useSelector } from "react-redux"

const BookSummary = () => {
   const booksList = useSelector(state => state.books)
    return (
        <div>
            <h2>Library Summary</h2>
            <p>Total Books: <span>{booksList.length}</span></p>
            <ul>
                {booksList && 
                    booksList.map(book => 
                        <li key={book.id}>{book.title} by {book.author}(ISBN: {book.isbn})</li>)
                }
            </ul>
        </div>
    )
}

export default BookSummary