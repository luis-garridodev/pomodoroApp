import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';


function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer pomodorotime={10}
       shortRestTime={2} 
       LongRestTime={5}
       cycles={4}
       />
    </div>
  )}

        export default App;
