import { useState } from "react"
import { useDispatch } from "react-redux"

import { addBook } from "./actions"

const AddBookForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")

    const addBookHandler = () => {
        console.log('here')
        const book = {
            title: title,
            author: author,
            isbn: isbn
        }
        dispatch(addBook(book))
    }

    return (
        <div>
            <input type='text' id='title' onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
            <input type='text' id='author' onChange={(e) => setAuthor(e.target.value)} placeholder='Author'/>
            <input type='number' id='ISBN' onChange={(e) => setIsbn(e.target.value)} placeholder='ISBN'/>
            <button id='addBookBtn' onClick={() => addBookHandler()}>Add Book</button>
        </div>
    )
}

export default AddBookForm