
import PropTypes from 'prop-types';

const Grid = ({ numRows, numCols }) => {
  const createRange = (num) => [...Array(num).keys()];

  return (
    <div className="grid">
      {createRange(numRows).map((rowIndex) => (
        <div key={rowIndex} className="row">
          {createRange(numCols).map((colIndex) => (
            <div key={colIndex} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};

export default Grid;
