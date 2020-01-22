import React, { useState } from 'react';
import './Signin.css'

export interface SigninProps {
  onPathChange: (path: string) => void;
}


const Signin: React.SFC<SigninProps> = ({onPathChange}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  }

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  }

  const onSubmit =(e: any) => {
    e.preventDefault();
    onPathChange('map');
  }

  return (
    <div className='signin'>
      <h3>Вход в приложошку </h3>
    <form>
      <input 
        name="email" 
        value={email} 
        onChange={onChangeEmail}
        className="form-control">

      </input>
      <br />
      <input 
        name="password" 
        value={password}
        onChange={onChangePassword}
        className="form-control">          
      </input>
    </form>
    <button onClick={onSubmit}>Войти</button>
    </div>
  )
}

export default Signin;