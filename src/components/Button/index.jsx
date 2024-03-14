import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};
const variants = {
  outline: {
    gray_900_03: "border-gray-900_03 border border-solid text-black-900",
    black_900: "border-black-900 border border-solid shadow-xs text-gray-900_02",
  },
};
const sizes = {
  xs: "h-[51px] pl-2 pr-[35px] text-[23px]",
  sm: "h-[75px] px-[35px] text-[23px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "outline",
  size = "xs",
  color = "gray_900_03",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-[23.98px] border border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_900_03", "black_900"]),
};

export { Button };
