import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

export default function ModalConfirm({
    open, 
    onClose, 
    onConfirm,
    title,
    message,
}) {

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {title}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {message}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose}>No</Button>
            <Button onClick={onConfirm} autoFocus>Yes</Button>
            </DialogActions>
        </Dialog>
    </>
    )
}