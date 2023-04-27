import { Space } from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageCOntent ">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
