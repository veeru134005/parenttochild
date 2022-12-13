import React, { useState } from "react";

export default function Child(props) {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    props.fromParentEvent(name);
  };

  return (
    <>
      {props.parent}
      <form onSubmit={submithandler}>
        UserName : <input type="text" value={name} onChange={changeHandler} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
