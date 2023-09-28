import React, {useState} from 'react';

const pattern = /^\w+[a-zA-Z0-9+_. ...]+@[a-zA-Z0_9. ...]+?\.[a-zA-Z]{2,3}$/;  

function UserLogin(props){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e){
        if(e.target.value !== ''){
            setUserId(e.target.value);
        }
    } 

    function validateEmail(text){
        if(!pattern.test(text)){
            alert("Invalid email address");
            return false;
        }
        return true;
    }

    function handlePasswordChange(e){
        if(e.target.value !== ''){
            console.log("password not blank");
            setPassword(e.target.value);
        }

    } 
    function validateLogin(){
        console.log('validation complete');
        if(validateEmail(userId) )
        {
            props.onLogIn(true);
        }   
    }


    return(
        <>
            <label htmlFor='userid'>Email:</label>
            <input id='userid' name='userid' type='text' value={userId} onChange={handleEmailChange}></input>
            <br></br>
            <label htmlFor='password'>Password:</label>
            <input id='password' name='password' minLength='10' maxLength='25' type='password' value={password} onChange={handlePasswordChange}></input>
            <br></br>
            <button id="loginBtn" onClick={validateLogin}>Login</button>

        </>
    );
}
export default UserLogin;