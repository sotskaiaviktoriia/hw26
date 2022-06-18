import PropTypes from "prop-types";

const Square = ({ value, onClick, winner }) => (
  <button
    className={`${winner ? "winner_square" : "square"}`}
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]),
  onClick: PropTypes.func.isRequired,
};

export default Square;
