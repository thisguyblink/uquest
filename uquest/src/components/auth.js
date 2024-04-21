import { auth } from '../config/firebase_config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import React from 'react'
import './LoginSignup.css'


export const Auth = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    };

    return (
        <div class="signup">
            <form class="sbox" onSubmit={signIn}>
                <h1 class="signuptitle"></h1>
                <div>
                    <p>Email</p>
                <input class='inputebox' type='text'
                placeholder='Email...' value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                    <p>Password</p>
                <input class="inputpbox" type='text'
                placeholder='Password...' value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
            <div>
                <button class='signup1' type='submit'> Sign In</button>
            </div>
            </form>
            
        </div>
    );
};






// export const LoginSignup = () => {

//     const [action,setAction] = React.useState("Sign Up");
//   return (
//     <div className = 'container'>
//         <div className = "header">
//             <div className = "text">{action}</div>
//             <div className = "underline"></div>
//             </div>
//             <div className = "inputs">
//                 {action==="Login"?<div></div>:<div className = "input">
//                     <img src={user_icon}alt=""/>
//                     <input type="text" placeholder="Name"/>
//                 </div>}
//                 <div className = "input">
//                     <img src={email_icon}alt=""/>
//                     <input type="email" placeholder="Email Id"/>
//                 </div>
//                 <div className = "input">
//                     <img src={password_icon}alt=""/>
//                     <input type="password" placeholder="Password"/>
//                 </div>
//             </div>
//             {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
//             <div className="submit-container">
//                 <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
//                 <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
//             </div>
//         </div>
//   );
// };

// export default LoginSignup;
