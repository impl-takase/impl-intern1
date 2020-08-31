import React from "react";
import Button from "./Button";

import firebase from './firebase'

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
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.author}</td>
        <td>{props.item.category}</td>
        <td>{props.item.os}</td>
        <td>{props.item.model}</td>
        <td>{props.item.modelType}</td>
        <td>{props.item.color}</td>
        <td>{props.item.arrivalDate}</td>
        <td>{props.item.holder}</td>
        <td>{props.item.owner}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (props.labelName === "orderAll") {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.author}</td>
        <td>{props.item.category}</td>
        <td>{props.item.os}</td>
        <td>{props.item.model}</td>
        <td>{props.item.modelType}</td>
        <td>{props.item.color}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.labelName === "stockMachine"
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.type}</td>
        <td>{props.item.os}</td>
        <td>{props.item.color}</td>
        <td>{props.item.model}</td>
        <td>{props.item.modelType}</td>
        <td>{props.item.arrivalDate}</td>
        <td>{props.item.holder}</td>
        <td>{props.item.owner}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.labelName === "stockBook"
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.author}</td>
        <td>{props.item.category}</td>
        <td>{props.item.arrivalDate}</td>
        <td>{props.item.holder}</td>
        <td>{props.item.owner}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.labelName === "orderMachine"
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.type}</td>
        <td>{props.item.os}</td>
        <td>{props.item.color}</td>
        <td>{props.item.model}</td>
        <td>{props.item.modelType}</td>
        <td>{props.item.arrivalDate}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
            buttonName={"変更"}
          />
        </td>
      </tr>
    );
  } else if (
    props.labelName === "orderBook"
  ) {
    return (
      <tr>
        <td key={props.key} nowrap>
          {props.item.name}
        </td>
        <td>{props.item.ID}</td>
        <td>{props.item.author}</td>
        <td>{props.item.category}</td>
        <td>
          <Button
            task={() => handleClickdelete(props.item.id)}
            buttonName={"削除"}
          />
        </td>
        <td>
          <Button
            //task={()=>handleClickdelete(props.item.id)}
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