import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function App() {
  return (
    <>
      <div>
        <Button variant="contained">Hello World</Button>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
    </>
  )
}

export default App
