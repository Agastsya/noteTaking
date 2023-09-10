import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import ListCard from "./ListCard";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);
  const { isAuthenticated } = useContext(Context);

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/tasks/${id}`,
        {
          title,
          description, // Modify with the updated data
        },
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error("error.response.data.message");
    }
  };
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/tasks/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${server}/tasks/new`,
        {
          title,
          description,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };

  useEffect(() => {
    axios
      .get(`${server}/tasks/my`, {
        withCredentials: true,
      })
      .then((res) => {
        setTask(res.data.task);
      })
      .catch((error) => {
        toast.error("Login First");
        console.log(error);
      });
  }, [task]);

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <>
      <div className="task-body">
        <div className="task-input">
          <h1> Your Tasks</h1>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
        {task
          .slice()
          .reverse()
          .map((i) => (
            <ListCard
              key={i._id}
              id={i._id}
              title={i.title}
              description={i.description}
              isCompleted={i.isCompleted}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
