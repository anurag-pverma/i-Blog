import React from 'react'
import { useState } from 'react';

function CurrentTime() {
    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time)

function updateTime(){
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
}
setInterval(updateTime, 1000)
  return (
    <div>{currTime}</div>
  )
}

export default CurrentTime