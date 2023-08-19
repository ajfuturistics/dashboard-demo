import { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = ({
  setMobileMenu,
  openMobileMenu,
}: {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  openMobileMenu: boolean;
}) => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-20 flex justify-between lg:justify-center items-center bg-indigo-200 px-4">
      <h2 className="text-xl font-bold">
        {pathname === "/chart-and-maps" ? "Chart and Maps" : "Contacts"}
      </h2>

      {openMobileMenu ? (
        <FaXmark
          className="lg:hidden text-xl"
          onClick={() => setMobileMenu((prev) => !prev)}
        />
      ) : (
        <FaBarsStaggered
          className="lg:hidden text-xl"
          onClick={() => setMobileMenu((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Navbar;
