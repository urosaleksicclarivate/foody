
import { useState } from 'react';
import './App.css';
import DonateDialog from './components/DonateDialog';
import Table from './components/Table';
import { Button } from '@mui/material';
function App() {


  const [donate,setDonate]=useState(false);


  const onClose=()=>{
    setDonate(false);
  }
  const openDonateDialog=()=>{
    setDonate(true);
  }

  return (
    <div className="App">
      <Button variant='outlined' onClick={openDonateDialog}>Donate lunch</Button>
      <DonateDialog open={donate} onClose={onClose}/>
     <Table/>
    </div>
  );
}

export default App;
