import React, { useState } from 'react';
import { Button } from '@material-ui/core';


export interface SignUpProps {
  onPathChange: (path: string) => void;
}
 
export interface SignUpState {}
   
const SignUp = ({onPathChange}: SignUpProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const onChangePassword= (e: any) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    onPathChange('map');
  }
  return ( 
    <div>
      <h1>Reg form</h1>
      <form>
        <label>
          email
          <input 
            value={email} 
            name="email"            
            onChange={onChangeEmail}>
          </input>
        </label>
        <label>
          password
          <input 
            value={password} 
            name="password" 
            onChange={onChangePassword}> 
          </input>
        </label>   
        <Button onClick={onSubmit} color="primary" variant="contained">
        Confirm
      </Button>     
      </form>
    </div>
  );
}
 
export default SignUp;