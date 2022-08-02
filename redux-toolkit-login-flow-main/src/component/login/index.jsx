import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import { login } from '../signin/signinSlice';
import Swal from 'sweetalert2';

export function Index() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { from = { pathname: '/' } } = location.state;
  function handleFormStateChange(event) {
    const { name, type, value, checked } = event.target;

    setFormState({ ...formState, [name]: type === 'checkbox' ? checked : value });
  }

  async function handleOnClick(event) {
    event.preventDefault();
    navigate(from, { replace: true })
    await dispatch(login(formState))
  }
  return (
      <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input  id="username" name="username" type="text" value={formState.username} onChange={handleFormStateChange} required=""/>
              <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" id="password" name="password" value={formState.password} onChange={handleFormStateChange} required=""/>
              <label>Password</label>
          </div>
          <div className="form-group">
            <label htmlFor="rememberMe" style={{color: "green"}}>Remember me</label>
            <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formState.rememberMe}
                onChange={handleFormStateChange}
            />
          </div>
          <a href="src/component/login/LoginPage#index.jsx" onClick={handleOnClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
      </div>
  );


}
