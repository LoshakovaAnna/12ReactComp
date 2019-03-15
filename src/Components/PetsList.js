import React from 'react';

import PetItem from './PetItem';

function PetsList(props){    

    const { arr, handleDelete } = props;

    return (
        <ul className="list">
        {
            arr.map(
                (dog, index) => {
                    return ( 
                        <PetItem key={index} {...dog} index={index}  handleDelete={handleDelete}/>
                    )
                   }
            )
        }
        </ul>      
    )
}

export default PetsList;