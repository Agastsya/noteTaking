import PropTypes from "prop-types";

const ListCard = ({
  id,
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
}) => {
  return (
    <>
      <div key={id} className="listcard">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <input
          type="checkbox"
          className="checkbox"
          onChange={() => updateHandler(id)}
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)}>Delete</button>
      </div>
    </>
  );
};

ListCard.propTypes = {
  id: PropTypes.string.isRequired, // Assuming key is a string
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  updateHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default ListCard;
