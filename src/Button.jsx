// eslint-disable-next-line react/prop-types
const Button = ({ children, Icon, className = '' }) => {
  return (
    <div>
      <button
        type="button"
        className={`${className} text-purple-800 rounded-full hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2`}
      >
        {Icon && <Icon className="inline-block mr-2" />}{' '}
        {/* Render the icon if provided */}
        {children}
      </button>
    </div>
  );
};
export default Button;
