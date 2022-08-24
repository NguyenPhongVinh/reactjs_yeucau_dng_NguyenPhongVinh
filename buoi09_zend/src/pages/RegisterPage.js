import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validateFormRegister } from '../helpers'
import { actactRegisterAsync, actLoginAsync } from '../store/auth/actions'
import { MESSAGE_FORM_ERROR } from '../constants'

function RegisterPage() {
  const history = useHistory();
  const [formError, setFormError] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: {
      value: '',
      error: ''
    },
    username: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }
  });


  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();

    const error = validateFormRegister({ value, name });

    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const isValid = checkFormIsValid();

    if (!isValid) {
      console.log('form error');
      return;
    }

    const dataRequest = {
      nickname: formData.nickname.value,
      username: formData.username.value,
      email: formData.email.value,
      password: formData.password.value
    };

    if (loading) return;

    setLoading(true);
    setFormError('');

    dispatch(actactRegisterAsync(dataRequest)).
      then(res => {
        if (res.ok) {
          history.push('/');
        } else {
          let mess = MESSAGE_FORM_ERROR[res.code] ?? MESSAGE_FORM_ERROR.default;
          setFormError(mess);
          setLoading(false);
        }
      })
  }

  function checkFormIsValid() {
    const newFormData = {};
    Object.keys(formData).forEach(key => {
      const formValue = formData[key];
      newFormData[key] = {
        value: formValue.value,
        error: validateFormRegister({ value: formValue.value, name: key })
      }
    })
    setFormData(newFormData);

    if (newFormData.username.error || newFormData.email.error || newFormData.password.error) return false;
    return true;
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              {formError && <p className="form-login__error">{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  value={formData.nickname.value}
                  error={formData.nickname.error}
                  name="nickname"
                  onChange={handleOnChange}
                />
                <Input
                  label="Tên đăng nhập (*)"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input
                  type="email"
                  label="Email (*)"
                  placeholder="Nhập email ..."
                  autoComplete="email"
                  value={formData.email.value}
                  error={formData.email.error}
                  name="email"
                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  name="password"
                  onChange={handleOnChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button loading={loading} type="primary" size="large">Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
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

export default RegisterPage