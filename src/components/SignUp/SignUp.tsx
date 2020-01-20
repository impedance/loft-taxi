import React from 'react';
import Button from '../../shared/Button';

export interface SignUpProps {
  onPathChange: (path: string) => void;
}
 
export interface SignUpState {}
   
class SignUp extends React.Component<SignUpProps, SignUpState> {
  state = {
    email: "",
    password: ""
  }
  onChangeHandler = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e: any) => {
    const { onPathChange } = this.props;
    e.preventDefault();
    onPathChange('login');
  }
  render() { 
    const { email, password} = this.state;
    return ( 
      <div>
        <h1>Reg form</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            email
            <input 
              value={email} 
              name="email"            
              onChange={this.onChangeHandler}>
            </input>
          </label>
          <label>
            password
            <input 
              value={password} 
              name="password" 
              onChange={this.onChangeHandler}> 
            </input>
          </label>   
          <Button text='Confirm'></Button>     
        </form>
      </div>
     );
  }
}
 
export default SignUp;