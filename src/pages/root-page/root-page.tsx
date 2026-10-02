import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import "./root-page.css";
function RootPage() {
  return (
    <>
      <NavigationBar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
