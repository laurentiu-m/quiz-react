import backIcon from "../assets/back-icon.svg";
import PropTypes from "prop-types";

export default function BackButton({ handleClick }) {
  return (
    <button
      onClick={() => handleClick(false)}
      className="p-1 bg-primaryColor rounded-md"
    >
      <img src={backIcon} alt="back-icon" className="w-[25px]" />
    </button>
  );
}

BackButton.propTypes = {
  handleClick: PropTypes.func,
};
