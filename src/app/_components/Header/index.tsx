'use client';

import { useEffect, useState } from "react";
import Link from "next/link";


// import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import Container from "@/components/_layout/Container";
import MenuMobile from "./MenuMobile";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1220) setMobileOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed left-4 md:left-20 right-4 md:right-20 top-4 md:top-8 z-40 rounded-xl backdrop-blur-md bg-gray-900/30 border border-gray-700/30">
      <Container>
        <MenuDesktop />
        <MenuMobile isOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </Container>
    </header>
  )
}

export default Header;
