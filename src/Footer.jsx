import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from './img/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              src={logo} // Replace with your logo's path
              alt="Logo"
              className="w-12 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-black">Product</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <a href="#">Connections</a>
              </li>
              <li>
                <a href="#">Protocols</a>
              </li>
              <li>
                <a href="#">Personas</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
            </ul>
          </div>

          {/* For Developers Links */}
          <div>
            <h3 className="font-semibold text-black">For Developers</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Open Source</a>
              </li>
              <li>
                <a href="#">Engineering Team</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-black">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-black">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Bulletins</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Partner</a>
              </li>
              <li>
                <a href="#">Portal</a>
              </li>
            </ul>
            <div>
              <h3 className="font-semibold text-black">Newsletter</h3>
              <form className="mt-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 h-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter */}
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-6 border-t mt-10">
          <p className="text-gray-600">
            © 2024 <span className="font-semibold">Iftakher Mahmud</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
