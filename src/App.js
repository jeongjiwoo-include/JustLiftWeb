import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SoundPlayer from 'react-soundplayer';

const renderTime = ({ remainingTime }) => {
  var minutes = Math.floor(remainingTime / 60);
  var seconds = remainingTime % 60;
  var Time = '';
  if(minutes < 10) minutes = `0${minutes}` ;
  if(seconds < 10) seconds = `0${seconds}` ;
      Time = `${minutes}:${seconds}`;
  if (remainingTime === 0) {
    return <div className="timer">쉬는 시간 종료</div>;
  }

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

  const nextKey = () => {
    setKey((prevKey) => prevKey + 1)
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
        duration={40}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}>
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button className="button" onClick={()=>{setStart(true)}}>
        <div className="buttontext">
        시작
        </div>
      </button>
      <br/>
      <button className="button" onClick={()=>{setStart(false)}}>
        <div className="buttontext">
        멈춤
        </div>
      </button>
      <br/>
      <button className="button" onClick={()=>{setStart(false); nextKey();}}>
        <div className="buttontext">
        시간 초기화
        </div>
      </button>
      <br/>
      <button className="button" onClick={()=>{setStart(false); nextKey(); setCount(0);}}>
        <div className="buttontext">
        세트 초기화
        </div>
      </button>

    </div>

  );
}



export default App;
