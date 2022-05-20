import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Home />
      </div>
    </QueryClientProvider>
  );
};

export default App;
