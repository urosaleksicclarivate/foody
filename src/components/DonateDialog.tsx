import { Button, Dialog,DialogActions,DialogContent,DialogTitle } from "@mui/material";
import Table from "./Table";

interface DialogProps{
    open:boolean,
    onClose:()=>void
}


const data=[
    {id:"prvi",kitchen:"Milankovic",mainDish:"Burger",soup:"Pileca supa",salad:"Vitaminska",bread:true},
    {id:"drugi",kitchen:"Milankovic",mainDish:"TEST",soup:"Pileca supa TEST",salad:"TEst saalata",bread:false},
  ]





const DonateDialog=(props:DialogProps)=>{

    const onChange=()=>{
        console.log("Kliknut checkbox");
    }


    return (<>
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Donate Lunch:</DialogTitle>
            <DialogContent><Table lunches={data} onChange={onChange}/></DialogContent>
            <DialogActions>
                <Button variant="contained">Donate</Button>
            </DialogActions>
        </Dialog>
    </>)
}

export default DonateDialog;