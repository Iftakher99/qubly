import bg from './img/Path606.png';
import profile from './img/Profile.png';
import logo1 from './img/logo/BigSpring.png';
import logo2 from './img/logo/Clearbit.png';
import logo3 from './img/logo/Mine.png';
import logo4 from './img/logo/Shake.png';
import logo5 from './img/logo/Tonkean.png';

const Testimonial = () => {
  return (
    <div
      className="bg-cover bg-center py-60"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto text-center">
        <h5 className="text-2xl font-bold mt-10 text-gray-600">
          &quot;What I love about Qubly is the easy way we can collaborate even
          if there is a lot of people involved in the process &quot;
        </h5>
        <div className="flex items-center justify-center mt-10">
          <img src={profile} alt="s" />
        </div>
        <div className="mt-10">
          {' '}
          <h5 className="text-2xl font-bold">Guillaume Cabane</h5>
          <h5 className="text-2xl font-bold">CTO @ BigSpring</h5>
        </div>
        <div className="mt-20 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center justify-center">
          <img src={logo1} alt="logo" className="w-3/4" />
          <img src={logo2} alt="logo" className="w-3/4" />
          <img src={logo3} alt="logo" className="w-3/4" />
          <img src={logo4} alt="logo" className="w-3/4" />
          <img src={logo5} alt="logo" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
