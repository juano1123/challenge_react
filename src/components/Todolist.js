import Items from './Items';
import './Todolist.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/listSlice';
import { useHistory } from "react-router-dom";

function Todolist() {
    const [ item, setItem ] = useState("");
    const [ items, setItems ] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();


    const addItem = () => {
        if(!item)
            return;
        if(items.includes(item))
            return;
        setItems(items => [...items, item]);
        setItem("");
    }
    
    const removeItem = (name) => {
        setItems(items => items.filter(item => item !== name));
    }

    const saveList = () => {
        if(!items || items.length < 1)
            return;
        dispatch(add(items));
        setItems([]);
        history.push("/lists");
    }

    return (
        <div className='todolist'>
            <div className='header'>
                <input name='nombre' type="text" value={item} onChange={(e) => setItem(e.target.value)} /> 
                <button onClick={() => addItem()}>Add</button>
                <button onClick={() => saveList()}>Save</button>
            </div>
            <Items items={items} removeFunction={removeItem} />
        </div>
    );
}

export default Todolist;