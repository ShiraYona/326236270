import { getDataService } from '../src/Service'
import { useState } from "react";
import DatesDetails from './DatesDetails';
import { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
const Home = () => {
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [arrayDates, setArrayDates] = useState("");
    //התלבטתי מה הדרישה ,פה גם אם אני משנה תאריך אחד ולא 2 תאריכים הוא מתרנדר עוד פעם
    //useEffect אם הכוונה היתה לרנדר שוב רק בששתי התאריכים משתנים אז בלי 
  useEffect(() => {
    getData()
}, [arrayDates])

    const getData = () => {
        if (!date1 || !date2) {
            return;
        }
        getDataService(date1, date2)
            .then((response) => {
                if (response.data !== null) {
                    console.log(response.data);
                    setArrayDates(response.data)
                    console.log(arrayDates);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getOnlyParashat = ()=>{
       
     let arr=arrayDates && arrayDates.filter(e => e.className==="parashat")
       arr.map((e, ind) => (<DatesDetails ind={ind} date={e} ></DatesDetails>))
    }

    //רנדור הצגת הכל
     let renderArray = arrayDates && arrayDates.map((e, ind) =>(<DatesDetails ind={ind} date={e} ></DatesDetails>))

    return (
        <div>
            <h1>ברוכה הבאה!!!</h1>
            <h3>הכנס 2 תארכים </h3>
            <input
                placeholder="הכנס תאריך ראשון"
                onBlur={(e) => setDate1(e.target.value)}
            />
            <input
                placeholder="הכנס תאריך שני"
                onBlur={(e) => setDate2(e.target.value)}
            />
            <br></br>
            <br></br>
            <button onClick={() => getData()}>הצגת הכל </button>
            <button onClick={() => getOnlyParashat()}>הצגת פרשות שבוע </button>
           
            {/* <Calendar  placeholder="הכנס תאריך ראשון" onChange={(e) => setDate1(e.value)}  dateFormat="yy-mm-dd" showButtonBar></Calendar>
            <Calendar  placeholder="הכנס תאריך שני" onChange={(e) => setDate2(e.value)}  dateFormat="yy-mm-dd" showButtonBar></Calendar>  */}

    

            {renderArray}
        </div>

    )

}
export default Home


