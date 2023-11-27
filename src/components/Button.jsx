import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => (
  <button
    className={`flex justify-center items-center border font-montserrat gap-2 px-7 py-4 text-lg leading-none 
                rounded-full ${
                  backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-black hover:text-white ${
                        fullWidth && "w-full"
                      }`
                    : "bg-coral-red text-white  border-coral-red  hover:bg-red-500"
                } `}
  >
    {label}

    {iconURL && (
      <img
        src={iconURL}
        alt="arrow right"
        className="icon ml-2 rounded-full w-5 h-5"
      />
    )}
  </button>
);

export default Button;
