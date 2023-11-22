import { Card } from 'primereact/card';
// יש לי פה בהערה רינדור בעזרת הספריה
const DatesDetails =(props)=>{
return(
    <>
    <div style={{borderColor:"black",borderStyle:"double" ,width:"9cm"}  }>
      <h1>{props.date.title}</h1>
      <h3>תאריך לועזי : {props.date.start}</h3>  
      <h3>{props.date.allDay}</h3>
      <h3>{props.date.hebrew}</h3>
      <h3>{props.date.className}</h3>
      
    </div>
  
{/* <Card >
  {props.date.title}
  {props.date.allDay}
  {props.date.hebrew}
  {props.date.className}
</Card> */}

    <br></br>
    </>
)

}
export default DatesDetails