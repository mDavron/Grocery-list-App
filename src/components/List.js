import React from 'react'
import './List.css'

const List = ({items}) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const {id,title} = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
          </article>
        ) 
      })}
    </div>
  )
}

export default List