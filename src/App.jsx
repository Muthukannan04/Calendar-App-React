import './App.css'
import rightarrow from './assets/right-arrow.svg'
import leftarrow from './assets/left-arrow.svg'
import { useState } from 'react'


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function App() {
    const [selectDate,setSelectDate]=useState(new Date());

    const dayInMonth=()=>{
      const daysArray=[];

      const firstDay=new Date(selectDate.getFullYear(),selectDate.getMonth(),1);
      const lastDay=new Date(selectDate.getFullYear(),selectDate.getMonth() + 1,0);
      // console.log(firstDay);
      // console.log(lastDay);

     for(let i=0; i<firstDay.getDay(); i++){
  daysArray.push(null);
  }

     for(let i=1; i<=lastDay.getDate(); i++){
      daysArray.push(
        new Date(selectDate.getFullYear(), selectDate.getMonth(), i)
      );
    }

      return daysArray;
    }
    dayInMonth();

    const isSameDate =(date1,date2)=>{
      return date1.getDate()===date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
    };

    const handleChangeMonth=(e)=>{
      const newMonth = Number.parseInt(e.target.value,10);
      setSelectDate(new Date(selectDate.getFullYear(),newMonth,1))

    }
    const handleChangeYear = (e)=>{
      const newYear =Number.parseInt(e.target.value,10);
      setSelectDate(new Date(newYear,selectDate.getMonth(),1))
    }


  return (
    <>
      <div className="calendar">
        <div className="header">
          <button onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()-1,1))}}>
            <img src={leftarrow} />
          </button>
          <select value={selectDate.getMonth()} onChange={handleChangeMonth}>
            {months.map((months,index)=>(
              <option value={index} key={index}>
                {months}</option>
           ))}
          </select>
          <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
            {
              Array.from({length:20},(_,i)=>selectDate.getFullYear()-10 + i).map((year)=>(
                <option key={year} value={year}>{year}</option>
              ))
            }
          </select>
          <button onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()+1,1))}}>
            <img src={rightarrow}  />
          </button>
        </div>
        <div className="daysofweeks">
          {days.map((day)=>(
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {dayInMonth().map((day,index)=>(
            <div key={index} className={day?(isSameDate(day,new Date()))?"day current" :"day" : "empty"}>
                {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
         <div className="footer">
        <p>Designed by <b>Mk</b></p>
      </div>
      </div>
     
    </>
  )
}

export default App
