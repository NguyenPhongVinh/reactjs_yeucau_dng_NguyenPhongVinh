import { useRef, useState } from 'react';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import './login.css';
function Login() {
  const [typeInput, setStyleInput] = useState('password');
  const [txtUserName, setTxtUserName] = useState('');
  const [txtPassWord, setTxtPassWord] = useState('');
  function toggleTypeInput() {
    setStyleInput(typeInput === 'password' ? 'text' : 'password');
  }

  function handerSumbit(event) {
    event.preventDefault();
    const text = `Username: ${txtUserName} \nPassword: ${txtPassWord}`;
    alert(text);
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form onSubmit={handerSumbit}>
                <div className="form-control">
                  <label>Username</label>
                  <Input onChange={(e) => setTxtUserName(e.target.value)} placeholder="Enter Username .." autoComplete="false" />
                </div>
                <div className="form-control">
                  <label>Password</label>
                  <i onClick={toggleTypeInput} className="toggle-password ion-eye" />
                  <Input onChange={(e) => setTxtPassWord(e.target.value)} type={typeInput} placeholder="Enter Password ..." autoComplete="false" />
                </div>
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
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