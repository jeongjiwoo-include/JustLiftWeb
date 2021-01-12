import logo from '../logo.svg';
import '../App.css';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SoundPlayer from 'react-soundplayer';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

import Routes from './Routes'

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">쉬는 시간 종료</div>;
  }

  var minutes = Math.floor(remainingTime / 60);
  var seconds = remainingTime % 60;
  var Time = '';
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  Time = `${minutes}:${seconds}`;
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{Time}</div>
      <div className="text">seconds</div>
    </div>
  )
};

const Main = ({ match }) => {
  const [key, setKey] = useState(0);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [sec, setSec] = useState(Number(match.params.sec));

  const nextKey = () => {
    setKey((prevKey) => prevKey + 1)
  }

  const NewButton = (props) => {
    return (
      <button className="button" onClick={() => { props.onClick() }}>
        <div className="buttontext">
          {props.name}
        </div>
      </button>
    )
  }




  return (
    <div className="frame">
      <h1>
        🏋 ➡ {count}세트
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          onComplete={() => { setCount(count + 1); nextKey(); setStart(false); }}
          isPlaying={start}
          duration={sec}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000'],
          ]}>
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <NewButton name="시작" onClick={() => { setStart(true) }} />
      <br />
      <NewButton name="멈춤" onClick={() => { setStart(false) }} />
      <br />
      <NewButton name="시간 초기화" onClick={() => { setStart(false); nextKey(); }} />
      <br />
      <NewButton name="세트 초기화" onClick={() => { setCount(0); }} />
      <br />
      <Link to={`/`}><NewButton name="시간 재설정" onClick={() => { }} /></Link>

    </div>
  );
}

export default Main;