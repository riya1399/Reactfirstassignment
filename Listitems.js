import React from 'react';
import './Listitems.css';

function Listitems(props){
    const items=props.items;
    console.log("abc"+items)
    const listitems=items.map(items =>{
        return <div className="list" key={items}>
            <table>
          <tr>
              <td>{items.name}</td>
              <td>{items.quantity}</td>
              <td onClick={() =>props.deleteItem(items.key)}>Delete</td>
          </tr>
          </table>
        </div>
    })
    return(
        <div>

     {listitems}</div>
    )
}

export default Listitems;