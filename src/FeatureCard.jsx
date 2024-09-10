// eslint-disable-next-line react/prop-types
const FeatureCard = ({ Icon, heading, color, description }) => {
  return (
    <div className="text-center p-4">
      {/* Icon Section */}
      <div className="mb-4">
        {Icon && <Icon className={`mx-auto w-12 h-12 ${color}`} />}
      </div>
      {/* Heading */}
      <h3 className="text-xl font-bold mb-2">{heading}</h3>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
export default FeatureCard;
