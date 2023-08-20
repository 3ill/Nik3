const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} border ${borderColor}`
          : ' bg-coral-red hover:bg-blue-900 text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'} `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow_right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
