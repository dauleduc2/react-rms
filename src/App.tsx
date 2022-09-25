import { useState } from "react";
import { useGetUserById } from "./hooks";

function App() {
  const [id, setId] = useState("");
  const { data } = useGetUserById(id);
  return (
    <div className="">
      <h1>React App</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button
        onClick={() => setId("1")}
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Get user information
      </button>
    </div>
  );
}

export default App;
