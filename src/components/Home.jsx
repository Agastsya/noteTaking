const Home = () => {
  return (
    <>
      <div className="task-body">
        <h1> Your Tasks</h1>

        <div className="task-input">
          <form>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
