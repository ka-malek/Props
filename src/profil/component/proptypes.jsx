
import PropTypes from 'prop-types';


const Example = (props) => {
    return (
      <div>
        <p>Some prop: {props.some}</p>
        <p>Other prop: {props.other}</p>
      </div>
    );
  };
  
  Example.propTypes = {
    some: PropTypes.string.isRequired,
    other: PropTypes.number.isRequired
  };
  
  export default Example;
  
  