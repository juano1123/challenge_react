import React from 'react';
import { useSelector } from 'react-redux';
import { getLists } from '../redux/listSlice';
import './List.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { list_detail, list_stats } from '../redux/listSlice';
import { GetDetails } from '../redux/services/list_detail';

function List() {
    const lists = useSelector(getLists)
    const history = useHistory();
    const dispatch = useDispatch();

    const viewDetails = (list) => {
        GetDetails().then(details => {
            dispatch(list_detail(list))
            dispatch(list_stats(details.data))
            history.push("/detail");
        }).catch(error => { 
            console.error(error)
        })
    }

    return (
        <>
        <div className='link'>
            <Link to="todo">
                Add new Todolist
            </Link>
        </div>
        {
            lists && lists.map((list, index) => (
                <div key={`listas_${index}`} className="list">
                    {
                        list && list.map((itemList, index) => (
                            <div key={`${itemList}_${index}`} className="itemList">
                                {itemList}
                            </div>
                        ))
                    }
                    <p className='details' onClick={() => viewDetails(list)}>
                        See Details
                    </p>
                </div>
            ))
        }
        </>
    );
}

export default List;