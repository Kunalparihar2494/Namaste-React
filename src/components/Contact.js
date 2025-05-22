import { createContext, useContext, useState } from "react";
import About from "./About";

const Contact = () => {

    const [newItem,setNewItem] = useState('')
    const [list, setList] = useState([]);
    const ContactContext = createContext();
    const arr = [1,2,2,3,3,3,4,5,6,7];

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
    <div className="bg-amber-300 font-bold text-2xl">
      {arr}
    </div>
</div>
  ) ;
};

export default Contact;
