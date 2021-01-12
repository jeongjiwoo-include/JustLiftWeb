import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Time = () => {
    const [sec, setSec] = useState(0);

    const handleChange=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "sec") {
          if (!Number(val)) {
            alert("숫자를 입력하세요.");
          }
          else{
            setSec(Number(val));
          }
        }
      }

    const NewButton=(props)=> {
        return (
          <button className="button" onClick={()=>{props.onClick()}}>
            <div className="buttontext">
              {props.name}
        </div>
          </button>
          )
      }  
     
    return (
      <div className="frame">
        <h1>시간설정</h1>
        <br/>
          <label className="modalText">원하는 시간을 초 단위로 입력해주세요.</label>
          <br/>
          <br/>
          <br/>
          <br/>
          <input className="timeSet" type="number" name="sec" placeholder="SECOND" value={sec} onChange={handleChange}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link to={`/main/${sec}`}>
            <NewButton name="확인" onClick={()=>{}}/>
          </Link>
   
      </div>
    );
  }

  export default Time;