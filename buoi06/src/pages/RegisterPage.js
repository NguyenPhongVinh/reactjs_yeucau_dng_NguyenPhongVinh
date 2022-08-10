import { useState } from 'react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import { Link } from "react-router-dom";
import './Login/login.css';
function RegisterPage() {
  const [txtNickname, setTxtNickname] = useState('');
  const [txtUserName, setTxtUserName] = useState('');
  const [txtPassWord, setTxtPassWord] = useState('');
  const [txtRePassWord, setTxtRePassWord] = useState('');

  function handerSumbit(event) {
    let flag = true;
    if (txtPassWord != txtRePassWord) {
      alert('Nhập lại mật khẩu không chính xác');
    }
    if(flag){
      event.preventDefault();
      return;
    }
    const text = `Username: ${txtUserName} \nPassword: ${txtPassWord}`;
    alert(text);
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form onSubmit={handerSumbit}>
                <Input onChange={(e) => setTxtNickname(e.target.value)} label="Nickname" placeholder="Nhập Nickname ..." />
                <Input onChange={(e) => setTxtUserName(e.target.value)} label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." />
                <Input onChange={(e) => setTxtPassWord(e.target.value)} label="Mật khẩu" type="password" placeholder="Nhập mật khẩu của bạn ..." />
                <Input onChange={(e) => setTxtRePassWord(e.target.value)} label="Xác nhận mật khẩu" type="password" placeholder="Xác nhận mật khẩu ..." />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;