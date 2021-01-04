import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SoundPlayer from 'react-soundplayer';
import ReactModal from 'react-modal';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">쉬는 시간 종료</div>;
  }

  var minutes = Math.floor(remainingTime / 60);
  var seconds = remainingTime % 60;
  var Time = '';
  if(minutes < 10) minutes = `0${minutes}` ;
  if(seconds < 10) seconds = `0${seconds}` ;
      Time = `${minutes}:${seconds}`;
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{Time}</div>
      <div className="text">seconds</div>
    </div>
  )
};

const App = () => {
  const [key, setKey] = useState(0);
  const [sec, setSec] = useState(40);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const [modal, setModal] = useState(false);

  const nextKey = () => {
    setKey((prevKey) => prevKey + 1)
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
  function closeModal(){
    setModal(false);
  }

  const handleChange=(event)=>{
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "sec") {
      if (!Number(val)) {
        alert("숫자를 입력하세요.");
      }
    }
    setSec(val);
    alert(sec);
  }
  

  return (
    <div className="frame">
      <h1>
      🏋 ➡ {count}세트
      </h1>
      <div className="timer-wrapper">
      <CountdownCircleTimer
        key={key}
        onComplete={()=>{setCount(count+1); nextKey(); setStart(false); }}
        isPlaying={start}
        duration={sec}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}>
        {renderTime}
      </CountdownCircleTimer>
      </div>
      {/* <NewButton name="시간 설정" onClick={()=>{setModal(true)}} />
      <br/> */}
      <NewButton name="시작" onClick={()=>{setStart(true)}} />
      <br/>
      <NewButton name="멈춤" onClick={()=>{setStart(false)}}/>
      <br/>
      <NewButton name="시간 초기화" onClick={()=>{setStart(false); nextKey();}}/>
      <br/>
      <NewButton name="세트 초기화" onClick={()=>{setStart(false); nextKey(); setCount(0);}}/>
      <br/>
      <ReactModal
        isOpen={modal}
        onRequestClose={closeModal}
        contentLabel={"TimeSet"}
        ariaHideApp={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '100px',
            left: '500px',
            right: '500px',
            bottom: '100px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}>
        <div className="frame">
        <h1 className="modalTitle">시간설정</h1>
        <br/>
          <label className="modalText">원하는 초를 입력해주세요.</label>
          <br/>
          <input type="text" name="sec" placeholder="SECOND" onChange={handleChange}/>
          <br/>
          <NewButton name="확인" onClick={()=>{}}/>
   
        </div>
      </ReactModal>
    </div>
  );
}



export default App;
