import React from 'react';

const Table = (props) => {
    
    return (
        <th key={props.key}><font>{props.side}</font></th>          
    )
}

export default Table;