
interface Props{
    id:string,
    kitchen:string,
    mainDish:string,
    soup:string,
    salad:string,
    bread:boolean
    handleReserve:(id:string)=>void
    leftBy:string
}




const Lunch=(props:Props)=>{


    const handleReserve=()=>{
        props.handleReserve(props.id)
    }
    



    return (
        <tr>
            <td>{props.kitchen}</td>
            <td>{props.mainDish}</td>
            <td>{props.salad}</td>
            <td>{props.soup}</td>
            <td>{props.bread}</td>
            <td><button onClick={handleReserve}>Reserve</button></td>
            <td>{props.leftBy}</td>
        </tr>
    )
}

export default Lunch;