type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
};

const CustomInput: React.FC<InputProps> = ({ type, name, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CustomInput;
