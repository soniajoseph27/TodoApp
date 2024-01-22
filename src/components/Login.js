// src/components/Login.js
import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import '../Login.css';
import myImage from './goolelogo.png';
import logo from './mainlogo.png';

const Login = ({ setUser }) => {
  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('email', user.email);
      setUser(user);
    } catch (error) {
      console.error('Authentication failed:', error.message);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-left'>
        <h1>LOGIN</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh
          dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
          faucibus nibh dolor dui.
        </p>
        <button onClick={handleClick}>
          <img src={myImage} alt='Google Logo' />
          Sign in using Google
        </button>
      </div>
      <div className='login-right'>
        <img src={logo} alt=' Logo' />
      </div>
    </div>
  );
};

export default Login;






// import React, { useEffect, useState } from 'react';
// import { auth, provider } from './firebase';
// import { signInWithPopup, signOut,signInWithRedirect } from 'firebase/auth';
// import '../Login.css'; // Import the CSS file
// import myImage from './goolelogo.png';
// import logo from './mainlogo.png';
// import TodoApp from './TodoApp';

// function Login() {
  
//   const [user, setUser] = useState(null);

//   const handleClick = () => {
//     localStorage.removeItem('email');
//     setUser(null);

//     signInWithPopup(auth, provider)
//       .then((data) => {
//         setUser(data.user);
//         localStorage.setItem('email', data.user.email);
//       })
//       .catch((error) => {
//         // Handle the authentication error
//         console.error(error.message);
//       });
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         setUser(null);
//         localStorage.removeItem('email');
//       })
//       .catch((error) => {
//         // Handle the sign-out error
//         console.error(error.message);
//       });
//   };

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('email');
//     if (storedEmail) {
//       setUser({ email: storedEmail });
//     }
//   }, []);

//   return (
//     <div className='login-page'>
//       {user ? (
//         <div>
//           <TodoApp user={user} />
//           <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div className='login-left'>
//           <h1>LOGIN</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Aliquet at eleifend feugiat vitae faucibus nibh dolor dui.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Aliquet at eleifend feugiat vitae faucibus nibh dolor dui.
//           </p>
//           <button onClick={handleClick}>
//             <img src={myImage} alt='Google Logo' />
//             Sign in using Google
//           </button>
//         </div>
//       )}
//       <div className='login-right'>
//       <img src={logo} alt=' Logo' />
//       </div>
//     </div>
//   );
// }

// export default Login;
