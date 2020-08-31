/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import firebase from '../firebase'

const db = firebase.firestore();

const AddItemForm = (props) => {

    const [name, setName] = useState("");
    const [ID, setID] = useState("");
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [modelType, setModelType] = useState('');
    const [os, setOs] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [owner, setOwner] = useState('');
    const [holder, setHolder] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');

    const inventoryDevicelist = props.tabelContent === 'device' ?
        [
            { labelName: "機械の種類", inputType: "text", inputValue: name, inputOnchange: setName },
            { labelName: "管理番号", inputType: "text", inputValue: ID, inputOnchange: setID },
            { labelName: "種類", inputType: "text", inputValue: type, inputOnchange: setType },
            { labelName: "OS", inputType: "text", inputValue: os, inputOnchange: setOs },
            { labelName: "色", inputType: "text", inputValue: color, inputOnchange: setColor },
            { labelName: "機種", inputType: "text", inputValue: model, inputOnchange: setModel },
            { labelName: "モデル", inputType: "text", inputValue: modelType, inputOnchange: setModelType },
            { labelName: "入荷日", inputType: "number", inputValue: arrivalDate, inputOnchange: setArrivalDate },
            { labelName: "保管者", inputType: "text", inputValue: owner, inputOnchange: setOwner },
            { labelName: "貸出人", inputType: "text", inputValue: holder, inputOnchange: setHolder },
        ] : props.tabelContent === 'book' ?
            [
                { labelName: "書籍の種類", inputType: "text", inputValue: name, inputOnchange: setName },
                { labelName: "管理番号", inputType: "text", inputValue: ID, inputOnchange: setID },
                { labelName: "筆者", inputType: "text", inputValue: author, inputOnchange: setAuthor },
                { labelName: "領域", inputType: "text", inputValue: category, inputOnchange: setCategory },
                { labelName: "入荷日", inputType: "number", inputValue: arrivalDate, inputOnchange: setArrivalDate },
                { labelName: "保管者", inputType: "text", inputValue: owner, inputOnchange: setOwner },
                { labelName: "貸出人", inputType: "text", inputValue: holder, inputOnchange: setHolder }
            ] : [];

    //console.log(props.tabelContent)

    const handleChange = (e, inputOnchange) => {
        console.log(e.currentTarget.value);
        inputOnchange(e.currentTarget.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await db.collection('items').add(
            props.tabelContent === 'device' ?
                {
                    name,
                    ID,
                    type,
                    os,
                    color,
                    model,
                    modelType,
                    arrivalDate,
                    holder,
                    owner,
                    isInventory: props.isInventory,
                    isDevice: true
                } :
                {
                    name,
                    ID,
                    type,
                    os,
                    color,
                    model,
                    modelType,
                    arrivalDate,
                    holder,
                    owner,
                    isInventory: props.isInventory,
                    isDevice: false
                }
        ).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        })
        if (props.tabelContent === 'device') {
            setName('');
            setID('');
            setType('');
            setColor('');
            setOs('');
            setModelType('');
            setModel('');
            setArrivalDate('');
            setHolder('');
            setOwner('');
        } else {
            setName('');
            setID('');
            setAuthor('');
            setCategory('');
            setArrivalDate('');
            setHolder('');
            setOwner('');
        }

        //props.createNewArray(props.labelName)
    }
    return (
        <>
            {props.tabelContent !== 'all' ?
                <>
                    <h2>フォームの追加</h2>
                    <form onSubmit={handleSubmit}>
                        {inventoryDevicelist.map((value, i) => (
                            <label key={i}>{value.labelName}:
                                <input style={{ display: "block" }} type={value.inputType} value={value.inputValue} onChange={function (e) { handleChange(e, value.inputOnchange) }} />
                            </label>
                        ))}
                        <input type='submit' />
                    </form>
                </>
                : null
            }
        </>

    )
}

export default AddItemForm;