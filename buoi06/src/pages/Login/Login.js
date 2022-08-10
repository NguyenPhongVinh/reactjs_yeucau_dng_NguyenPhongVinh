import { useRef, useState } from 'react';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { Link } from "react-router-dom";
import './login.css';
function Login() {
  const [txtUserName, setTxtUserName] = useState('');
  const [txtPassWord, setTxtPassWord] = useState('');

  function handleSubmit(event) {
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
              <form onSubmit={handleSubmit}>
                <Input onChange={(e) => setTxtUserName(e.target.value)} label="Username" placeholder="Enter Username ..." />
                <Input onChange={(e) => setTxtPassWord(e.target.value)} label="Password" type="password" placeholder="Enter Password ..." />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
                  <Link to="/register">Register</Link>
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