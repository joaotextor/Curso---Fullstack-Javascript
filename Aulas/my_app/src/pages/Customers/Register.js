import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const classes = {
    inputs: {
        marginBlock: '10px'
    }
}

export default function Register() {
    return (
        <>
            <div>
                <TextField id="customer-name" label="Enter customer name" variant="standard" sx={classes.inputs}/>
            </div>
            <div>
                <TextField id="customer-role" label="Enter customer role" variant="standard" sx={classes.inputs}/>
            </div>
            <div>
                <Button variant="contained" sx={classes.inputs}>Register</Button>
            </div>

        </>
    )
}