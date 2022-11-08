
import React, { useState, useEffect } from 'react'
import List from './components/List';
import Alert from './components/Alert';
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEding] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {

    } else if (name && isEditing) {

    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  }
  return (
    <div className='wrapper'>
      <form className='grocery-form' onClick={handleSubmit}>
        {alert.show && <Alert />}
        <h3>List Notes</h3>
        <div className="form-controll">
          <div class="input-group mb-3">
            <input type="text"
              class="form-control"
              placeholder="Add new item"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <button class="btn btn-outline-primary"
              type="submit"
              id="button-addon2">
              {isEditing ? "Edit item" : "Add item"}
            </button>
          </div>
        </div>
      </form>
      <div className="grocery-container">
        <List  items = {list}/>
        <button className='btn btn-outline-secondary clear-btn'>Clear All</button>
      </div>
    </div>
  )
}

export default App