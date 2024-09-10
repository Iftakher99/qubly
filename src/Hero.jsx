import HeroContent from './HeroContent';
import bg from './img/BG.png';
import Navbar from './Navbar';
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center  h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-4">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
};
export default Hero;
