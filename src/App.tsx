import { CreateTodo, TodoColum } from "./components";
import useBoundStore from "./Store/Store";

function App() {
  return (
    <div>
      <CreateTodo />
      <div className="max-w-7xl mx-auto my-0 flex flex-row gap-4">
        <TodoColum progress="todo" />
        <TodoColum progress="done" />
      </div>
    </div>
  );
}

export default App;
