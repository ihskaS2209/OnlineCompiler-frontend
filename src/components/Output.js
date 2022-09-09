import '../styles/Output.css';

export const Output = ({cssclass, label, bkcolor}) =>{
    
    console.log(bkcolor==="black")
    return (
        <>
        <div className="output-box" style={bkcolor==="white"?{backgroundColor:"white"}:{backgroundColor:"black"}}>
            <p className={cssclass}>{label}</p>
        </div>
        </>
    )
}