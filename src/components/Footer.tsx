import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#123557] text-white py-12">
      <div className="container mx-auto py-4 px-6 md:px-16 lg:px-28 border-y-2 border-gray-600">
        {/* Flex wrapper to manage responsiveness */}
        <div className="flex flex-wrap justify-between items-start gap-12">
          {/* HABOT Branding */}
          <div className="w-full md:w-auto lg:w-auto flex-shrink-0">
            <img src="./../images/footerlogo.png" alt="Logo" className=" mr-2" />
            <p>&copy; BrightFuture</p>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-1/2 lg:w-auto">
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Terms Section */}
          <div className="w-full md:w-1/2 lg:w-auto">
            <h3 className="font-semibold mb-2">Terms</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Data Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Related Section */}
          <div className="w-full md:w-1/2 lg:w-auto">
            <h3 className="font-semibold mb-2">Related</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="w-full md:w-1/2 lg:w-auto flex gap-4 mt-4 lg:mt-0">
            <a href="#" className="hover:text-gray-400 ">
              <i className="fab fa-linkedin p-3 rounded-full border-y-2 border-gray-600"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter p-3 rounded-full border-y-2 border-gray-600"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook p-3 rounded-full border-y-2 border-gray-600"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram p-3 rounded-full border-y-2 border-gray-600"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
