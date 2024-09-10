import { BiBrightness } from 'react-icons/bi';
import Button from './Button';
import heroImg from './img/image1.png';

const HeroContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen px-4">
      {/* Text */}
      <div className="text-left p-4 md:w-1/2">
        <Button className={'font-semibold'} Icon={BiBrightness}>
          {' '}
          v3.1 released. <span className="underline"> Learn more</span>
        </Button>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold w-full md:w-3/4">
          Your data with real-time analytics
        </h1>

        <p className="text-gray-700 text-base md:text-lg lg:text-xl mt-3 w-full md:w-3/4">
          Harness the potential of Big Data Analytics & Cloud Services and
          become a data-driven organization with Needle tail
        </p>

        <div className="flex flex-col sm:flex-row mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-purple-500 font-semibold text-white">
            {' '}
            Start free trial
          </Button>
          <Button className="font-semibold bg-white"> Learn more</Button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-4 md:mt-0 md:w-1/2">
        <img src={heroImg} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
};
export default HeroContent;
