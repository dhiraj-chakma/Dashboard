import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink for navigation
import { SiShopware } from "react-icons/si"; // Import Shopware icon from react-icons
import { MdOutlineCancel } from "react-icons/md"; // Import Cancel icon from react-icons
import { TooltipComponent } from "@syncfusion/ej2-react-popups"; // Import TooltipComponent for tooltip functionality
import { links } from "../data/dummy"; // Import links data for sidebar
import { useStateContext } from "../contexts/contextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize,currentColor } = useStateContext(); // Controls visibility of the sidebar, hardcoded to true for demonstration

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  // CSS classes for styling active and normal links
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";



  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && ( // Render the sidebar if activeMenu is true
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              {/*  Shopware icon */}

              <span>Shoppy</span>
              {/* Brand name */}
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hid+"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map(
                  (
                    link // Map over the links in each section
                  ) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSidebar}

                      style={({ isActive }) => ({backgroundColor: isActive? currentColor: ""})}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>{" "}
                    </NavLink>
                  )
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
