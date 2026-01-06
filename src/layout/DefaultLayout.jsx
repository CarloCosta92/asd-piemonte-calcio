import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallToAction from "../components/ui/CallToAction";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-(--color-bg-main) text-(--color-text-main)">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-(--gradient-sand-from) to-(--gradient-sand-to)">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
