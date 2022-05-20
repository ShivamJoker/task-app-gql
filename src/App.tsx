import React, { useEffect } from "react";
import { Chain } from "./zeus";
import { useTypedQuery } from "./zeus/reactQuery";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Home from "./Home";

const chain = Chain(
  "https://n2puvdwp4vafbfkkw77nwxvkey.appsync-api.us-east-1.amazonaws.com/graphql",
  {
    headers: {
      "x-api-key": "da2-cf76yzrr25g3tahsbppolgn7pq",
    },
  }
);
const getAllTaks = async () => {
  const res = await chain("query")({
    allTasks: [
      {
        //input
        // nextToken:string
      },
      {
        //output
        items: {
          description: true,
          id: true,
          taskStatus: true,
          title: true,
        },
      },
    ],
  });
  console.log(res);
};

const queryClient = new QueryClient();

const App = () => {
  // useEffect(() => {
  //   getAllTaks();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
