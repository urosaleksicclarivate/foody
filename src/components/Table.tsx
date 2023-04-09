import Lunch from "./Lunch"

import "./Table.css"

interface Props{
    id:string,
    kitchen:string,
    mainDish:string,
    soup:string,
    salad:string,
    bread:boolean,
    leftBy:string

}

const data:Props[]=[
    {id:"prvi",kitchen:"Milankovic",mainDish:"Burger",soup:"Pileca supa",salad:"Vitaminska",bread:true,leftBy:"Uros Aleksic"},
    {id:"drugi",kitchen:"Milankovic",mainDish:"TEST",soup:"Pileca supa TEST",salad:"TEst saalata",bread:false,leftBy:"Petar Petrovic"},
]
const Table=()=>{


    const handleReserve=(id:string)=>{
        console.log("Item koji treba biti rezervisan je: ",id);
    }


    return(
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>Kitchen</th>
                    <th>Lunch</th>
                    <th>Soup</th>
                    <th>Salad</th>
                    <th>Bread</th>
                    <th>Reserve</th>
                    <th>Left By:</th>
                </tr>
            </thead>
            <tbody>
                {data.map((lun,index)=>{
                    return <Lunch key={index} {...lun} handleReserve={handleReserve}/>
                })}
            </tbody>
        </table>
        </div>
    )
}
export default Table;