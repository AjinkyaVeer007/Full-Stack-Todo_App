import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

function EditDelete(props) {
  //Delete Todo logic
  const handleDelete = async (user) => {
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    await axios
      .delete(`http://localhost:4000/deleteTodo/${user._id}`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log("Fail to delete my Todo");
      });
  };

  //Edit Todo logic

  const handleEdit = async (user) => {
    props.setTaskArr([null]);
    props.setTitle({ ...props.mainTitle, title: user.Title, id: user._id });
    props.setTaskArr([...user.Tasks]);
    console.log(props.title, "mytitle");
  };

  return (
    <div className="flex justify-end gap-2 mt-8">
      <BiEdit size={"20px"} onClick={() => handleEdit(props.todo)} />
      <AiFillDelete size={"20px"} onClick={() => handleDelete(props.todo)} />
    </div>
  );
}

export default EditDelete;
