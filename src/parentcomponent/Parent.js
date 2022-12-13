import { useState } from "react";
import Child from "../chilecomponent/Child";

export default function Parent() {
  const [name, setName] = useState("");

  const getData = (data) => {
    console.log(data);
    setName(data);
  };

  return (
    <>
      <Child fromParentEvent={getData} parent="haii i am from parent" />

      {name}
    </>
  );
}
