import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500": primary,
      "border-gray-900": secondary,
      "border-green-500": success,
      "border-yellow-400": warning,
      "border-red-500": danger,
      "bg-blue-500 text-white": primary && !outline,
      "bg-gray-900 text-white": secondary && !outline,
      "bg-green-500 text-white": success && !outline,
      "bg-yellow-400 text-white": warning && !outline,
      "bg-red-500 text-white": danger && !outline,
      "bg-white text-blue-500": outline && primary,
      "bg-white text-gray-900": outline && secondary,
      "bg-white text-green-800": outline && success,
      "bg-white text-yellow-400": outline && warning,
      "bg-white text-red-500": outline && danger,
      "rounded-full": rounded,
    }
  );
  // const classes = classNames(
  //   rest.className,
  //   "flex items-center px-3 py-1.5 border",
  //   {
  //     "border-blue-500 bg-blue-500 text-white": primary,
  //     "border-gray-900 bg-gray-900 text-white": secondary,
  //     "border-green-500 bg-green-500 text-white": success,
  //     "border-yellow-400 bg-yellow-400 text-white": warning,
  //     "border-red-500 bg-red-500 text-white": danger,
  //     "rounded-full": rounded,
  //     "bg-white": outline,
  //     "text-blue-500": outline && primary,
  //     "text-gray-900": outline && secondary,
  //     "text-green-800": outline && success,
  //     "text-yellow-400": outline && warning,
  //     "text-red-500": outline && danger,
  //   }
  // );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        `Only one of primary, secondary, success, warning, danger can be true.`
      );
    }
  },
};

export default Button;
