const Button = ({ title, activeClass, callBack }) => {
  return (
    <button className={activeClass} onClick={callBack}>
      {title}
    </button>
  );
};

export default Button;
