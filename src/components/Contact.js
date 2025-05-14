import { useState } from "react";

const Contact = () => {

    const [newItem,setNewItem] = useState('')
    const [list, setList] = useState([])

    const addToList = (param) =>{
        setList([...list,param])
        setNewItem('');
    }

    const removeItem = (param) =>{
       const newList = [...list];
       newList.splice(param,1)
       setList(newList);
    }

  return (
<div>
    <h1>Contact Us</h1>
    <div>
        <input value={newItem} onChange={(e)=>{
            setNewItem(e.target.value)
        }}/>
       <button onClick={()=> addToList(newItem)}>Add to to list</button>
    </div>
    <div>
        {list.map((item,index)=>{
          return (
            <div>
                <li key={index}>{item}</li>
                <button onClick={()=> removeItem(index)}>Remove Item</button>
            </div>
          )
        })}
    </div>
</div>
  ) ;
};

export default Contact;
