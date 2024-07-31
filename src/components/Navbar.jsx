import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleBar = () => {
    setMobileDrawer(!mobileDrawer);
  };
  return (
    <nav className="sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-neutral-700">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center flex-shrink-0">
            <img className="h-10 w-10 " src={logo} alt="logo" />
            <span className="text-xl tracking-tighter start">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li Key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex ml-14 space-x-12 justify-center items-center">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign In
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              href="#"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleBar}>
              {mobileDrawer ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 decoration-none">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                href="#"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
