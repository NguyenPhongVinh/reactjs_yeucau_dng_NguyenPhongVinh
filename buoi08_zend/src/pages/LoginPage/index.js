import './login.css'
import { Link } from "react-router-dom"
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { actLoginAsync } from '../../store/auth/actions';

function LoginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }
  });

  const [resMessErr, setResMessErr] = useState('');

  const [loading, setLoading] = useState(false);

  function validateFormData({ value, name }) {
    let error = '';

    if (name === 'username' && !value) {
      error = 'Username không được rỗng!';
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password không được rỗng!';
      } else if (value.length < 6) {
        error = 'Password phải có ít nhất 6 ký tự'
      }
    }

    return error;
  }

  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    const error = validateFormData({ value, name });
    // setFormData({
    //   ...formData,
    //   [name]: {
    //     value,
    //     error
    //   }
    // })
    _setFormData(name, value, error)
  }

  function _setFormData(
    name, value, error
  ) {
    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateDataSubmit()) return;

    setLoading(true);
    dispatch(actLoginAsync({
      username: formData.username.value,
      password: formData.password.value
    })).then((response) => {
      setLoading(false);

      let messErr = '';
      if (!response.token.length) {
        messErr = 'Username hoặc password không hợp lệ';
      } else {
        // lưu token
        alert('token: ' + response.token);
      }
      setResMessErr(messErr);
    });
  }

  function validateDataSubmit() {
    let nameU = 'username',
      valueU = formData.username.value;

    let errUser = validateFormData({
      value: valueU,
      name: nameU,
    });

    let nameP = 'password';
    let valueP = formData.password.value;

    let errPass = validateFormData({
      value: valueP,
      name: nameP
    });

    setFormData(
      {
        username: {
          value: valueU,
          error: errUser
        },
        password: {
          value: valueP,
          error: errPass
        }
      }
    );


    if (errUser || errPass) return false;
    return true;
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              {resMessErr && <p className="response-err">{resMessErr}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  isShowError={true}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  isShowError={true}
                  name="password"
                  onChange={handleOnChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button loading={loading} type="primary" size="large">Đăng nhập</Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  )
}

export default LoginPage