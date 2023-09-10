import axios from "axios";
import { useState } from "react";
import { server } from "../main";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      </div>
    </>
  );
};

export default Home;
