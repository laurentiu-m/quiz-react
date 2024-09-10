import PropTypes from "prop-types";

export default function ProgressBar({ index }) {
  return (
    <div className="w-full relative bg-primaryFontColor p-2 rounded-md sm:p-3 sm:rounded-xl">
      <div
        className="absolute left-0 top-0 bg-primaryColor p-2 rounded-md transition-all sm:p-3 sm:rounded-xl"
        style={{ width: `${index * 10}%` }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  index: PropTypes.number,
};
