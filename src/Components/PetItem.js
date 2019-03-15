import React from 'react';

function PetItem (props){
   
        const {name, owner, description, date, time, index, handleDelete } = props;
        return (
            <li>
                <div className="float-right">{date + ' ' + time}</div>
                <h3>
                <span>{name}</span> 
                <button className="btn btn-danger btn-sm" 
                   onClick={() => { handleDelete(index) }}>
                   Удалить</button>
                </h3>

                <h5>{owner}</h5>
                <p>{description}</p>
            </li>
        )
};

export default PetItem;