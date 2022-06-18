import PropTypes from "prop-types";

const GameInfo = ({ history, jumpTo, status }) => {
  return (
    <div>
      <div>{status}</div>

      <ol>
        {history.map((step, index) => {
          const isStartStep = index === 0;

          return (
            <li key={index}>
              <button onClick={jumpTo(index)}>
                {isStartStep ? `Start new game` : `Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

GameInfo.propTypes = {
  //   history: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", "null"])),
  //     })
  //   ).isRequired,
  history: PropTypes.array.isRequired,
  jumpTo: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default GameInfo;
