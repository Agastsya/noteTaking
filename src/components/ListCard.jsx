import PropTypes from "prop-types";

const ListCard = ({ key, title, description }) => {
  return (
    <>
      <div key={key} className="listcard">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </>
  );
};

ListCard.propTypes = {
  key: PropTypes.string.isRequired, // Assuming key is a string
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListCard;
