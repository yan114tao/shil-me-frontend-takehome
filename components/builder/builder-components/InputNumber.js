const InputNumber = ({
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
    <input
      type="number"
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...register?.(name)}
    />
  </div>
);

export default InputNumber;
