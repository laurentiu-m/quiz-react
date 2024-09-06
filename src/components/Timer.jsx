import PropTypes from "prop-types";

export default function Timer({ minutes, seconds }) {
  return (
    <div className="min-w-[80px] flex items-center justify-center px-3 py-1 bg-primaryColor rounded-md">
      <p className="font-medium">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}

Timer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};
