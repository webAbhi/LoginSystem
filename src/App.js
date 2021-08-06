// this is JSX 
import Header from "./component/Header";
import Content from "./component/Content";
import Login from "./component/Login";

import fire from './fire';
import { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  //method to clear error 
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  //Login of user
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  //creating a user

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            // console.log("hello");
            break;

          case "auth/weak-password":
            setPasswordError(err.message);
            break;

        }

      });
  };

  const logout = () => {
    fire.auth().signOut();
  };


  useEffect(() => {
    const auththenticate = () =>{
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInput();
          setUser(user);
        }   
        else {
          setUser('');
        }
      });
    };
  
   auththenticate();
  },[])

  return (
    <div>
      {
        (user) ? (
          <>
            <Header logout={logout} />
            <Content />
          </>
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            emailError={emailError}
            passwordError={passwordError}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
          />


        )}


    </div>
  );
}




export default App;