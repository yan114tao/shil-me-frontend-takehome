const InputLongText = ({
  placeholder,
  title,
  description,
  name,
  register,
  style,
  defaultValue,
}) => (
  <div className="control-container" style={style}>
    {title && <span className="title-container">{title}</span>}
    {description && <span className="description">{description}</span>}
    <textarea
      placeholder={placeholder}
      rows="4"
      cols="50"
      defaultValue={defaultValue}
      {...register?.(name)}
    />
  </div>
);

export default InputLongText;
