import { Button, Dialog,DialogActions,DialogContent,DialogTitle } from "@mui/material";

interface DialogProps{
    open:boolean,
    onClose:()=>void
}

const DonateDialog=(props:DialogProps)=>{
    return (<>
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Donate Lunch:</DialogTitle>
            <DialogContent>Here goes table with lunches</DialogContent>
            <DialogActions>
                <Button variant="contained">Donate</Button>
            </DialogActions>
        </Dialog>
    </>)
}

export default DonateDialog;