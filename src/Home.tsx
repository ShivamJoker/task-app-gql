import { SpinnerInfinity } from "spinners-react";
import { useTypedQuery } from "./zeus/reactQuery";

const Home = () => {
  const { data, isLoading, error } = useTypedQuery(
    "allTask",
    {
      allTasks: [
        {},
        {
          items: {
            description: true,
            id: true,
            taskStatus: true,
            title: true,
          },
        },
      ],
    },
    // do not retry and refetch on window change
    { retry: false, refetchOnWindowFocus: false }
  );

  // console.log(data);
  // console.log(JSON.stringify(error));

  if (isLoading) {
    return (
      <SpinnerInfinity
        style={{ margin: " auto" }}
        size={280}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    );
  }

  if (error) {
    return (
      <pre className="error">
        An error occured {"\n"}
        {JSON.stringify(error, null, 2)}
      </pre>
    );
  }
  return (
    <>
      <h1>Your tasks</h1>
      <ol>
        {data?.allTasks?.items?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ol>
    </>
  );
};

export default Home;
