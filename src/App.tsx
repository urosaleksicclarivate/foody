
import { useState } from 'react';
import './App.css';
import DonateDialog from './components/DonateDialog';
import Table from './components/Table';
import { Button } from '@mui/material';


const data=[
  {id:"prvi",kitchen:"Milankovic",mainDish:"Burger",soup:"Pileca supa",salad:"Vitaminska",bread:true,leftBy:"Uros Aleksic"},
  {id:"drugi",kitchen:"Milankovic",mainDish:"TEST",soup:"Pileca supa TEST",salad:"TEst saalata",bread:false,leftBy:"Petar Petrovic"},
]


function App() {


  const [donate,setDonate]=useState(false);


  const onClose=()=>{
    setDonate(false);
  }
  const openDonateDialog=()=>{
    setDonate(true);
  }

  const handleReserve=()=>{

  }

  return (
    <div className="App">
      <Button variant='outlined' onClick={openDonateDialog}>Donate lunch</Button>
      <DonateDialog open={donate} onClose={onClose}/>
     <Table lunches={data} handleReserve={handleReserve}/>
    </div>
  );
}

export default App;
