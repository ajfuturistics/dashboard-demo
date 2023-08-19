import { Link } from "react-router-dom";

const Sidebar = ({ openMobileMenu }: { openMobileMenu: boolean }) => {
  return (
    <div
      className={`${
        openMobileMenu ? "block" : "hidden"
      } w-3/5 h-full bg-indigo-100 lg:w-1/5 min-h-[90vh] lg:flex flex-col items-center gap-4 p-4`}
    >
      <div className="w-full bg-indigo-50 p-4 rounded-md text-center font-semibold text-lg m-2">
        <Link to="/">Contact</Link>
      </div>
      <div className="w-full bg-blue-50 p-4 rounded-md text-center font-semibold text-lg m-2">
        <Link to="/chart-and-maps">Chats and Maps</Link>
      </div>
    </div>
  );
};

export default Sidebar;
