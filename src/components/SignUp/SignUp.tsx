import React, { useState } from 'react';
import Button from '../../shared/Button';

export interface SignUpProps {
  onPathChange: (path: string) => void;
}
 
export interface SignUpState {}
   
const SignUp = ({onPathChange}: SignUpProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangePassword = (e: any) => {
    setEmail(e.target.value)
  }
  const onChangeEmail= (e: any) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    onPathChange('login');
  }
    return ( 
      <div>
        <h1>Reg form</h1>
        <form onSubmit={onSubmit}>
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
          <Button text='Confirm'></Button>     
        </form>
      </div>
     );
}
 
export default SignUp;