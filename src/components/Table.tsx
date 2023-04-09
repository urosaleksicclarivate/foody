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


interface Lunch{
    id:string,
    kitchen:string,
    mainDish:string,
    soup:string,
    salad:string,
    bread:boolean
    handleReserve?:(id:string)=>void
    leftBy?:string
    onChange?:()=>{}
}






interface TableProps{
    lunches:Lunch[],
    handleReserve?:()=>void
    onChange?:()=>void
}


const Table=(props:TableProps)=>{


  


    return(
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    {props.onChange && <th>select</th>}
                    <th>Kitchen</th>
                    <th>Lunch</th>
                    <th>Soup</th>
                    <th>Salad</th>
                    <th>Bread</th>
                    {props.handleReserve && <th>Reserve</th>}
                    {props.lunches[0].leftBy && <th>Left by:</th>}
                </tr>
            </thead>
            <tbody>
                {props.lunches.map((lun,index)=>{
                    return <Lunch key={index} {...lun} 
                    handleReserve={props?.handleReserve} 
                    onChange={props?.onChange}/>
                })}
            </tbody>
        </table>
        </div>
    )
}
export default Table;