import React from "react";
import { useTypedQuery } from "./zeus/reactQuery";

const Home = () => {
  const { data } = useTypedQuery({
    allTasks: {
      items: {
        description: true,
        id: true,
        taskStatus: true,
        title: true,
      },
    },
  });
  console.log(data);
  return <div></div>;
};

export default Home;
