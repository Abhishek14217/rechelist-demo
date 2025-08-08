import { forwardRef } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, className, ...rest }, ref) => {
    return (
      <div className="group w-full rounded-full p-[1px] bg-transparent focus-within:bg-gradient-to-r focus-within:from-primaryOrange focus-within:to-secondaryYellow transition-all duration-300">
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={className}
          {...rest}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
