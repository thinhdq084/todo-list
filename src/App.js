import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <TodoList />
      </main>
    </div>
  );
}
export default App;
