import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'


export default function Toasty({ open, message, severity, onClose }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  return (
    <>
      <Button onClick={handleClose}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert severity={severity}>
            {message}
        </MuiAlert>
      </Snackbar>
    </>
  )
}