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