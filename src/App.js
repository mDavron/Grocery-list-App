
import React, { useState, useEffect } from 'react'
import List from './components/List';
import Alert from './components/Alert';
import './App.css'
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return [];
  }
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEding] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      // alert display
      showAlert(true, "warning", "Please enter value!")
      console.log("shhhhh");
      // setAlert({show:true,msg:"please enter",type:"danger"})

    } else if (name && isEditing) {
      // edit
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      }));
      setName("");
      setEditId(null);
      setIsEding(false)
      showAlert(true, "success", " Item successfully edited!")
    } else {
      showAlert(true, "success", "Added New Item!")
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  }
  //alert
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
    // console.log("alert");
  }
  //clear All item
  const clearList = () => {
    let info = window.confirm("do you really want delete all items?");
    if (info) {
      showAlert(true, "danger", "Cleared All Items!");
      setList([]);
    }
    return;
  }
  //delete item
  const removeItem = (id) => {
    showAlert(true, "success", "Removed Item!");
    setList(list.filter((item) => item.id !== id))
  }
  //edit function

  const editItem = (id) => {
    const specifiItem = list.find((item) => item.id === id);
    setName(specifiItem.title)
    setEditId(id);
    setIsEding(true);
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  return (
    <>
      <div className='wrapper'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show ? <Alert {...alert} removeAlert={showAlert} list={list} /> : <h4 className='alert' >List Length: {list.length}</h4>}
          <div className="form-controll">
            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Add new item"
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <button className="btn btn-outline-primary"
                type="submit"
              >
                {isEditing ? "Edit item" : "Add item"}
              </button>
            </div>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list}
              removeItem={removeItem}
              editItem={editItem} />
            <button
              onClick={clearList}
              className='btn btn-outline-secondary clear-btn'
            >Clear All</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App