
const Options = ({ options, onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={onResetFeedback}>Reset</button>
      )}
    </div>
  );
};  
export default Options;
