const Button = ({ title, activeClass, callBack, disabled, onClick }) => {
  return (
    <button
      className={activeClass}
      onClick={() => {
        callBack();
        if (onClick) onClick();
      }}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
