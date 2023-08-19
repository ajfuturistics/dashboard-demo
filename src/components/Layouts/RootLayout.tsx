import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function RootLayout() {
  const [openMobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* navbar */}
      <Navbar setMobileMenu={setMobileMenu} openMobileMenu={openMobileMenu} />

      <main className="w-full h-full flex gap-2 min-h-[90vh]">
        {/* sidebar */}
        <Sidebar openMobileMenu={openMobileMenu} />

        {/* other elements */}
        <section className="w-full h-full">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default RootLayout;
