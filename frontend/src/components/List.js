import React from 'react'
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi"
import axios from "axios";
import { baseURL } from "../utils/constatnt";

const List = ({id, task,setUpdateUI, updateMode }) => {

const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
        console.log(res);
        setUpdateUI((prevState) => !prevState);
    });
}

  return (
    <li>
      {task}
      <div className="icon_holder"></div>
      <BiEditAlt className="icon" onClick={() => updateMode(id, task)}/>
      <BsTrash className="icon" onClick={removeTask} />

    </li>
  )
}

export default List
