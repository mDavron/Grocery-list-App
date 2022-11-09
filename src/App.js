
import React, { useState, useEffect } from 'react'
import List from './components/List';
import Alert from './components/Alert';
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEding] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      // alert display
      showAlert(true, "warning", "Please enter value!")
      // setAlert({show:true,msg:"please enter",type:"danger"})

    } else if (name && isEditing) {
      // edit

    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "Added New Item!")
    }
  }
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
    // console.log("alert");
  }
  const clearList = () => {
    showAlert(true, "danger", "Cleared All Items!");
    setList([]);
  }
  return (
    <div className='wrapper'>
      <form className='grocery-form' onClick={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>List Notes</h3>
        <div className="form-controll">
          <div className="input-group mb-3">
            <input type="text"
              className="form-control"
              placeholder="Add new item"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <button className="btn btn-outline-primary"
              type="submit"
              id="button-addon2">
              {isEditing ? "Edit item" : "Add item"}
            </button>
          </div>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button
            onClick={clearList}
            className='btn btn-outline-secondary clear-btn'
          >Clear All</button>
        </div>
      )}
    </div>
  )
}

export default App