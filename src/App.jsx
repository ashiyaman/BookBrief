import { useState } from 'react'

import AddBookForm from './AddBookForm'
import BookSummary from './BookSummary'

function App() {
  return (
   <main>
    <h1>Library Management</h1>
    <AddBookForm />
    <BookSummary/>
   </main>
  )
}

export default App
