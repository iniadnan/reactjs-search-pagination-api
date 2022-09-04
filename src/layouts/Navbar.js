import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-gray-700">
        <div className="container mx-auto">
          <div className="w-full flex justify-center items-center gap-x-5 text-gray-50 py-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
