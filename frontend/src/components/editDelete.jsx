import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

function EditDelete() {
  return (
    <div className="flex justify-end gap-2 mt-8">
      <BiEdit></BiEdit>
      <AiFillDelete></AiFillDelete>
    </div>
  );
}

export default EditDelete;
