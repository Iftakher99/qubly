import { FaChartBar } from 'react-icons/fa';
import Button from './Button';
import FeatureCard from './FeatureCard';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { BsDatabase, BsEyeFill } from 'react-icons/bs';
import logoImg from './img/Logos.png';
import logoImg2 from './img/image 6.png';

import { Gi3dHammer, GiTreeBranch } from 'react-icons/gi';

const InsightsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <Button className="text-md  font-semibold" Icon={BsEyeFill}>
          {' '}
          Why Qubly
        </Button>
        <h1 className="text-5xl mt-4 font-bold">
          Get Actionable Insight From Big Data in 3 Steps
        </h1>
        <p className="text-gray-600 mt-10  lg:px-72">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.{' '}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-4 mt-9">
        <FeatureCard
          Icon={FaChartBar}
          heading="Valuable business insights"
          color="text-blue-500"
          description="Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
        />
        <FeatureCard
          Icon={IoMailUnreadOutline}
          heading="Powerful Algorithms"
          color="text-red-500"
          description="With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data."
        />
        <FeatureCard
          Icon={BsDatabase}
          heading="Data in real-time"
          color="text-green-500"
          description="Collect data in real-time from multiple channels and move it into a data lake, in its original format."
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-10 md:flex-row justify-center items-center mt-10">
        <img
          className="w-1/2 flex-2 order-2 md:order-1 "
          src={logoImg}
          alt="sd"
        />
        <div className="order-1 md:order-2 ">
          <Button Icon={GiTreeBranch}> For Product Teams</Button>
          <h1 className="text-4xl font-bold">Launch with the best stack</h1>
          <p className="text-gray-500  w-3/4">
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </p>
        </div>
      </div>
      <div className="flex gap-6 md:gap-10 mt-4 flex-col md:flex-row justify-around items-center  ">
        <div>
          <Button Icon={Gi3dHammer}> For Engineering Teams</Button>
          <h1 className="text-4xl font-bold">
            Data-driven pipelines in minutes
          </h1>
          <p className="text-gray-500 w-3/4">
            Maintenance-free data pipelines with quick set-up and
            straight-forward deployments that are powered by a modern & scalable
            platform.
          </p>
        </div>
        <img className="w-1/2" src={logoImg2} alt="sd" />
      </div>
    </div>
  );
};
export default InsightsSection;
