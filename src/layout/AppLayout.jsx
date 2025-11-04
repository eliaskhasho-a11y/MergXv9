import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}
