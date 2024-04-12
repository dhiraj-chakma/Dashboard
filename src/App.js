import React from "react"; // Import React library for building UI components
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import components from react-router-dom for routing
import { FiSettings } from "react-icons/fi"; // Import settings icon from react-icons
import { TooltipComponent } from "@syncfusion/ej2-react-popups"; // Import Tooltip component for showing tooltips
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components"; // Import custom components used in the app
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages"; // Import page components
import "./App.css"; // Import stylesheet for the app
import { useStateContext } from "./contexts/contextProvider";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark"?"dark" :""}>
      <BrowserRouter>
        {/* Setup the router */}
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Main container with dark mode support */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/* Settings button with tooltip */}
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              {/* Sidebar component shown if activeMenu is true */}
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {/* Sidebar component hidden (width 0) if activeMenu is false */}
              <Sidebar />{" "}
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            {/* Content area with dynamic margin based on sidebar visibility */}
            <div className="fixed md:static bg:main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
