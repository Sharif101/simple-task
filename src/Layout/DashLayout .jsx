import { Outlet } from "react-router-dom";
import Sidenav from "../Components/Sidenav/Sidenav";

const DashLayout = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-x-7 my-7 mx-auto">
      <div>
        <Sidenav />
      </div>
      <div className="lg:col-span-3 my-7 sm:col-span-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashLayout;
