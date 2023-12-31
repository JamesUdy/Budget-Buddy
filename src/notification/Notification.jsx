import React from "react";
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import useStyles from './styles'

const Notify = ({open, setOpen}) => {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if(reason === 'Clickaway') return
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal:'center'}} open={open} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity='success' elevation={6} variant="filled">
                    Transaction Successfully Created 🎉
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Notify