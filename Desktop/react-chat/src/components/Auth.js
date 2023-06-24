import {auth, provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie';
import { useState } from "react";

const cookies = new Cookies();

export const Auth = (props) => {
    
    const {setIsAuth} = props;

    const [err, setErr] = useState(false);
    
    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true); // Here Auth is set to be true (after login)

        }  catch(err){
            console.error(err);
            setErr(true);
        }
    };

    return (
      <div className='Container auth'>
      <div className="ContainerWrapper">
        <span className="logo">Mansoor's Chat Rooms</span>
        <span className="title">Sign In</span>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            {err && <span>Something went wrong</span>}
          
      </div>
    </div>
    );
};
