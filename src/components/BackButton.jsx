import backIcon from "../assets/back-icon.svg";
import PropTypes from "prop-types";

export default function BackButton({ handleClick }) {
  return (
    <button
      onClick={() => handleClick(false)}
      className="p-1 bg-primaryColor rounded-md transition-all ease-linear hover:bg-primaryColor/80"
    >
      <img src={backIcon} alt="back-icon" className="w-[25px] sm:w-[30px]" />
    </button>
  );
}

BackButton.propTypes = {
  handleClick: PropTypes.func,
};
