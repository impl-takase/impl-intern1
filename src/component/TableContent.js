import React from "react";
import Button from "./Button";

import firebase from '../firebase'

const db = firebase.firestore()

const TableContent = (props) => {

  const handleClickdelete = (id) => {
    db.collection("items").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  if (props.labelName === "stockAll") {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.name}
        </td>
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
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (props.labelName === "orderAll") {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.name}
        </td>
        <td>{props.anArray.ID}</td>
        <td>{props.anArray.author}</td>
        <td>{props.anArray.category}</td>
        <td>{props.anArray.os}</td>
        <td>{props.anArray.model}</td>
        <td>{props.anArray.modelType}</td>
        <td>{props.anArray.color}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.anArray.isInventory === true &&
    props.anArray.isDevice === true
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.type}
        </td>
        <td>{props.anArray.ID}</td>
        <td>{props.anArray.name}</td>
        <td>{props.anArray.os}</td>
        <td>{props.anArray.color}</td>
        <td>{props.anArray.model}</td>
        <td>{props.anArray.modelType}</td>
        <td>{props.anArray.arrivalDate}</td>
        <td>{props.anArray.holder}</td>
        <td>{props.anArray.owner}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.anArray.isInventory === true &&
    props.anArray.isDevice === false
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.name}
        </td>
        <td>{props.anArray.ID}</td>
        <td>{props.anArray.author}</td>
        <td>{props.anArray.category}</td>
        <td>{props.anArray.arrivalDate}</td>
        <td>{props.anArray.holder}</td>
        <td>{props.anArray.owner}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.anArray.isInventory === false &&
    props.anArray.isDevice === true
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.type}
        </td>
        <td>{props.anArray.ID}</td>
        <td>{props.anArray.name}</td>
        <td>{props.anArray.os}</td>
        <td>{props.anArray.color}</td>
        <td>{props.anArray.model}</td>
        <td>{props.anArray.modelType}</td>
        <td>{props.anArray.arrivalDate}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.anArray.isInventory === false &&
    props.anArray.isDevice === false
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.anArray.name}
        </td>
        <td>{props.anArray.ID}</td>
        <td>{props.anArray.author}</td>
        <td>{props.anArray.category}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.anArray.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.anArray.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else {
    return <thead><tr><th>項目を選んでね</th></tr></thead>;
  }
};

export default TableContent;