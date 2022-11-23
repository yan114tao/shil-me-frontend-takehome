const Text = ({ placeholder, value, name, register, defaultValue = "" }) => (
  <input
    style={{ margin: "10px 0px" }}
    placeholder={placeholder}
    defaultValue={defaultValue}
    {...register?.(name)}
  />
);

export default Text;
