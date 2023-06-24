import './App.css'; 
import "./style.scss";
import { useState, useRef } from 'react';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import Cookies from 'universal-cookie';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';


const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);   // using ref insteading of updating room (no dynamic change)

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth){                  // Enters if no authentication is done
  return (
    <div className="App">
      <Auth setIsAuth={setIsAuth}/>  {/* Here after the Authentication is done, 'isAuth' is set to be true -> enters insider page */}
    </div>
  );
 }
  return (
    <>
      { room ? (
        <Chat room={room}/>
         ) : 
      ( <div className='Container room'>
          <div className='ContainerWrapper'>
            <label>
              Enter Room Name: 
            </label>
            <input ref={roomInputRef}/>
            <button onClick={() => setRoom(roomInputRef.current.value)}>Enter chat</button>  {/* Delaying the process of updating room */}
          </div>
      </div>)}

      <div className='sign-out'>
        <button onClick={signUserOut}> Sign out </button>
      </div>
    </>
  )
}

export default App;
