import React, { useState, useEffect } from "react";
import "./App.css";
import InCompleted from "./components/InCompleted";
import Completed from "./components/Completed";
import Header from "./components/Header";
import {
  getTodoList,
  addNewTask,
  changeTaskStatus,
  changeTaskFavourite,
} from "./Services/TodoServices";

function App() {
  let [listTasks, setTask] = useState([]);
  const [reLoadCount, setReloadCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(async () => {
    try {
      setError(false);
      // setLoading(true);
      setTask((await getTodoList()).data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [reLoadCount]);

  let addTask = async (name) => {
    try {
      setError(false);
      if (name === "") {
        alert("Please enter Task name.");
      } else {
        await addNewTask(name);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setReloadCount(reLoadCount + 1);
    }
  };

  let removeTask = (taskId) => {
    let tasks = listTasks.filter((task) => task.id !== taskId);
    setTask(tasks);
  };

  let onStatusChanged = async (isCompleted, taskId) => {
    try {
      setError(false);
      await changeTaskStatus(taskId, isCompleted);
    } catch {
      setError(true);
    } finally {
      setReloadCount(reLoadCount + 1);
      setLoading(false);
    }
  };

  let onFavoriteChanged = async (isFavorite, taskId) => {
    try {
      setError(false);
      await changeTaskFavourite(taskId, isFavorite);
    } catch {
      setError(true);
    } finally {
      setReloadCount(reLoadCount + 1);
      setLoading(false);
    }
  };

  const content = () => {
    return isError ? (
      <div align="center">
        <div>Lỗi rồi</div>
        <button
          onClick={() => {
            setReloadCount(reLoadCount + 1);
            setLoading(true);
            setError(false);
          }}
        >
          Reload
        </button>
      </div>
    ) : isLoading ? (
      "Loading...."
    ) : (
      <main>
        <Header addNewTask={addTask} />
        <section className="container">
          <InCompleted
            tasks={[...listTasks.filter((task) => !task.isCompleted)]}
            removeTask={removeTask}
            onStatusChanged={onStatusChanged}
            onFavoriteChanged={onFavoriteChanged}
          />
          <Completed
            tasks={[...listTasks.filter((task) => task.isCompleted)]}
            removeTask={removeTask}
            onStatusChanged={onStatusChanged}
            onFavoriteChanged={onFavoriteChanged}
          />
        </section>
      </main>
    );
  };
  return <div className="App">{content()}</div>;
}

export default App;
