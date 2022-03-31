import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Navi from '../components/Navi'


const Login = (props) => {
    const { register } = useForm()
  
    // if (token) {
    //   return <Redirect to="/" />
    // }
  console.log("Login");
    return (
      <>
      <Navi/>
      <div className="container">
        
          
          <form className="login">
            <svg className="login-sides">
              <line
                className="top-right first"
                x1="50%"
                x2="100%"
                y1="0"
                y2="0"
              />
              <line className="top-left first" x1="50%" x2="0" y1="0" y2="0" />
              <line
                className="right second"
                x1="100%"
                x2="100%"
                y1="0%"
                y2="100%"
              />
              <line className="left second" x1="0" x2="0" y1="0" y2="100%" />
              <line
                className="bottom-left third"
                x1="0"
                x2="50%"
                y1="100%"
                y2="100%"
              />
              <line
                className="bottom-right third"
                x1="100%"
                x2="50%"
                y1="100%"
                y2="100%"
              />
            </svg>
            <div className="login-fieldset">
              <input
                type="text"
                name="email"
                
                className="login-fieldset-field"
                {...register('email')}
              />
  
              <input
                type="password"
               
                className="login-fieldset-field"
                name="password"
                {...register('password')}
              />
              <button type="submit" className="login-fieldset-submit">
                
              </button>
  
              <span className="login-fieldset-field">
                
                <Link to="/register" style={{ margin: 5 }}>
                  
                </Link>
              </span>
            </div>
          </form>
        </div>
        </>
    )
  }
  
  export default Login
