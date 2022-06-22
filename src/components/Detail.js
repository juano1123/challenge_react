import React from 'react';
import { useSelector } from 'react-redux';
import { getList, getStats } from '../redux/listSlice';
import './Detail.css';
import { Link } from 'react-router-dom';

function Detail() {
    const list = useSelector(getList)
    const list_stats = useSelector(getStats)

    return (
        <>
            <div className='link'>
                <Link to="lists">
                    Back
                </Link>
            </div>
            <div className='stats'>
                <div>
                    TOTAL: <span>{list_stats && list_stats.total}</span>
                </div>
                <div>
                    DONE: <span>{list_stats && list_stats.done}</span>
                </div>
                <div>
                    DELAYED: <span>{list_stats && list_stats.delayed}</span>
                </div>
            </div>
            <div className='list'>
            {
                list && list.map((list, index) => (
                    <div key={`${list}_${index}_detail`} className="itemList">
                        {list}
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Detail;