const InputField = ({ name, changeHandler, value }) => {
  const isReadOnly = name === "total" ? true : false;
  return (
    <input
      type="number"
      name={name}
      onChange={changeHandler}
      value={value === 0 ? "" : value}
      className="input_item"
      readOnly={isReadOnly}
    />
  );
};

export default InputField;
