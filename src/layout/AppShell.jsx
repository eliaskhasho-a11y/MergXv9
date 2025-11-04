import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="flex">
        <aside className="hidden md:block w-[260px] p-3">
          <Sidebar />
        </aside>

        <main className="flex-1 flex flex-col min-h-screen">
          <TopBar />
          <div className="flex-1 px-4 md:px-6 py-4">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
