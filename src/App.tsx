import React from 'react';
import './App.css';
import Match, { matchList } from './sample_carpool_data.ts';
import { useState } from 'react';
import { IoMdThumbsDown, IoMdThumbsUp, IoMdBusiness, IoMdHome } from "react-icons/io";

function UserDetails(user: Match) {
  return (
    <div>
      <div class="text-2xl">{user.firstName} {user.lastName}</div>
      <div class="text-l">{user.employer}</div>
      <div class="grid grid-rows-2 auto-cols-max grid-flow-col justify-items-start items-center gap-x-1">
        <IoMdHome />
        <IoMdBusiness />
        <span>{user.startLocation} </span>
        <span>{user.endLocation} </span>
        <span class="font-light"> {user.startDistanceDelta} miles away</span>
        <span class="font-light"> {user.endDistanceDelta} miles away</span>
      </div>
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(0);

  function nextMatch() {
    setIndex(index + 1);
  }
  
  function AcceptButton() {
    return (
      <button class="h-30 w-30 p-2 rounded-full bg-green-500 active:bg-green-600" onClick={nextMatch}>
        <IoMdThumbsUp size={20} color='white'/>
      </button>
    )
  }
  
  function RejectButton() {
    return (
      <button class="h-30 w-30 p-2 rounded-full bg-red-600 active:bg-red-700" onClick={nextMatch}>
        <IoMdThumbsDown size={20} color='white'/>
      </button>
    )
  }

  return (
    <div class="flex flex-col items-center p-4">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {index < matchList.length ? (
        <div>
          {UserDetails(matchList[index])}
          <div class="flex flex-row justify-center m-2 gap-4">
            <AcceptButton />
            <RejectButton />
          </div>
        </div>
      ) : (
        <div>You have reached the end of the list.</div>
      )}
    </div>
  );
}

export default App;
