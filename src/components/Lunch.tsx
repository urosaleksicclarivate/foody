
interface Props{
    id:string,
    kitchen:string,
    mainDish:string,
    soup:string,
    salad:string,
    bread:boolean
    handleReserve?:(id:string)=>void
    leftBy?:string
    onChange?:()=>void
}




const Lunch=(props:Props)=>{


    const handleReserve=()=>{
        if(props.handleReserve)
        props.handleReserve(props.id)
    }
    



    return (
        <tr>
            {props.onChange && <td><input type="checkbox"/></td>}
            <td>{props.kitchen}</td>
            <td>{props.mainDish}</td>
            <td>{props.salad}</td>
            <td>{props.soup}</td>
            <td>{props.bread}</td>
            {props.handleReserve && <td><button onClick={handleReserve}>Reserve</button></td>}
            {props.leftBy && <td>{props.leftBy}</td>}
        </tr>
    )
}

export default Lunch;