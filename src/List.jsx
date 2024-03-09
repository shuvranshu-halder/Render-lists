import React from 'react'

function List(props) {

  return (
    <div className="list">
        <h3 className="category">{props.category}</h3>
        <div className="listitems">{props.listname.map(item=><li key={item.id}>{item.name} : {item.price}</li>)}</div>
    </div>
  )
}

export default List