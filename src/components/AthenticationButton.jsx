const AthenticationButton = ({ text, ...props }) => {
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};

export default AthenticationButton;
