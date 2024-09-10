import PropTypes from "prop-types";

function Button({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-primaryColor p-3 text-lg rounded-md font-semibold transition-all hover:bg-primaryColor/80"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
