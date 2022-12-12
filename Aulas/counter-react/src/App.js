import React, { useState } from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Albums',
    component: Albums
  },
  counter: {
    text: 'Counter',
    component: Counter
  },
  users: {
    text: 'Users',
    component: Users
  }
}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  // const Page = page === 'albums' ? Albums : Counter
  // Not the best way, because cant be escalated

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  return (
    <>
      { 
      
        pageNames.map(page => 
          <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>
        )

      }

      {/* { page === 'albums' ? <Albums /> : <Counter />}
      Not a good practice.
      */ }

      {Page && <Page />}
    </>
  )
}

export default App
