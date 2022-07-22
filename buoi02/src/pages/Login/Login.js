import { useState } from 'react';
import Input from '../../components/shared/Input';

import './login.css';
function Login() {
  const [typeInput, setStyleInput] = useState('password');
  function toggleTypeInput() {
    setStyleInput(typeInput === 'password' ? 'text' : 'password');
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form>
                <div className="form-control">
                  <label>Username</label>
                  <input type="text" placeholder="Enter Username ..." />
                </div>
                <div className="form-control">
                  <label>Password</label>
                  <i onClick={toggleTypeInput} className="toggle-password ion-eye" />
                  <Input type={typeInput} placeholder="Enter Password ..." autoComplete="false" />
                </div>
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">Submit</button>
                  <a href="register.html">Regiter</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;