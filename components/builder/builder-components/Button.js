const Button = ({ title, style, callback }) => (
  <button className="common-btn" onClick={() => callback?.()} style={style}>
    {title}
  </button>
);

export default Button;
