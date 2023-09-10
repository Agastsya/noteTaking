import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import toast from "react-hot-toast";
import ListCard from "./ListCard";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

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
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [task]);

  return (
    <>
      <div className="task-body">
        <h1> Your Tasks</h1>

        <div className="task-input">
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
            <ListCard key={i._id} title={i.title} description={i.description} />
          ))}
      </div>
    </>
  );
};

export default Home;
