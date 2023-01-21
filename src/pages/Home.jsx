import { useEffect } from "react";
import { Divider } from "antd";
import Nav from "../components/Nav";
import { searchQuery } from "../api";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

export default function Home() {
  useEffect(() => {
    searchQuery("aapl");
  }, []);

  return (
    <div className="home | container">
      <Nav />
      <Divider />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}
