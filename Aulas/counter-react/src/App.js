import React, { useState } from 'react'

import Albums from './pages/Albums'
import Counter from './pages/Counter'
import Users from './pages/Users'
import Template from './templates/Template'

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

  

  return (
      <Template pages={pages} activePage={page} onChangePage={handleChangePage}>

        {Page && <Page />}

      </Template>
  )
}

export default App
