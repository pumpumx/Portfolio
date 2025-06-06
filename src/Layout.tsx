// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Nav from "./components/navBar/Nav";
import Footer from "./components/footer/Footer";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Fixed Nav */}
      <div className="w-full h-full ">
        <header className="sticky bg-transparent  top-0 z-50 ">
          <Nav />
        </header>
        <main className="flex-grow  top-0">
          <Outlet />
        </main>

        {/* Fixed Footer */}

        <footer className="z-40 bottom-0">
          <Footer />
        </footer>
      </div>
    </div>

  );
};

export default Layout;
