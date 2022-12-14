import React from 'react'
import './List.css'

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item, i) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'> <span><b>{i + 1}.</b></span> &nbsp;{title}</p>
            <div className="btn-container">
              <button onClick={() => editItem(id)}><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>
              <button onClick={() => removeItem(id)}><i className="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List