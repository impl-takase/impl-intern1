import React from 'react';
import Button from './Button';

const TableContent = (props) => {

    if (props.labelName === 'stockAll') {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.name}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.author}</td>
                <td>{props.anArray.category}</td>
                <td>{props.anArray.os}</td>
                <td>{props.anArray.model}</td>
                <td>{props.anArray.modelType}</td>
                <td>{props.anArray.color}</td>
                <td>{props.anArray.arrivalDate}</td>
                <td>{props.anArray.holder}</td>
                <td>{props.anArray.owner}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        );
    } else if (props.labelName === 'orderAll') {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.name}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.author}</td>
                <td>{props.anArray.category}</td>
                <td>{props.anArray.os}</td>
                <td>{props.anArray.model}</td>
                <td>{props.anArray.modelType}</td>
                <td>{props.anArray.color}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        );

    } else if (props.anArray.isInventory === true && props.anArray.isDevice === true) {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.type}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.name}</td>
                <td>{props.anArray.os}</td>
                <td>{props.anArray.color}</td>
                <td>{props.anArray.model}</td>
                <td>{props.anArray.modelType}</td>
                <td>{props.anArray.arrivalDate}</td>
                <td>{props.anArray.holder}</td>
                <td>{props.anArray.owner}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        )
    } else if (props.anArray.isInventory === true && props.anArray.isDevice === false) {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.name}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.author}</td>
                <td>{props.anArray.category}</td>
                <td>{props.anArray.arrivalDate}</td>
                <td>{props.anArray.holder}</td>
                <td>{props.anArray.owner}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        );
    } else if (props.anArray.isInventory === false && props.anArray.isDevice === true) {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.type}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.name}</td>
                <td>{props.anArray.os}</td>
                <td>{props.anArray.color}</td>
                <td>{props.anArray.model}</td>
                <td>{props.anArray.modelType}</td>
                <td>{props.anArray.arrivalDate}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        );
    } else if (props.anArray.isInventory === false && props.anArray.isDevice === false) {
        return (
            <tr>
                <td key={props.key} nowrap>{props.anArray.name}</td>
                <td>{props.anArray.ID}</td>
                <td>{props.anArray.author}</td>
                <td>{props.anArray.category}</td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'削除'}
                /></td>
                <td><Button
                    /*task={処理}*/
                    buttonName={'変更'}
                /></td>
            </tr>
        );
    } else {
        return (
            <p>項目を選んでね</p>
        );
    }
}

export default TableContent;