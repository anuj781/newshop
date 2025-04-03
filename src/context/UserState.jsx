import React, { useState } from 'react'
import UserContext from './UserContext';

const UserState = ({children}) => {
    let UserData = JSON.parse(localStorage.getItem('Login'));
    const [user, setuser] = useState({
        email:UserData ? UserData.email : '' ,
        login:UserData ? UserData.login : false
    });
    const [change, setchange] = useState('');
    console.log(change);
  return (
    <UserContext.Provider value={{user,setuser,change,setchange}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserState
