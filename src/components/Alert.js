import React, { useEffect } from 'react'
import './Alert.css'

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearInterval(timeout)
  }, []);
  return (
    <h4 className={`alert alert-${type}`}>{msg}</h4>
  )
}

export default Alert