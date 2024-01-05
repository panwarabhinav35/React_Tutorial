import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <p className="lead">
      This is the live current time:<span>{time.toLocaleDateString()} {timeString}</span>
    </p>
  );
}

export default CurrentTime;
