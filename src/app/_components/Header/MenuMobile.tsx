import { Button } from "@/components/atoms/button";
import Link from "next/link";

interface IMenuMobile {
  isOpen: boolean;
  setMobileOpen: (isOpen: boolean) => void;
}

function Menu() {
  return (
    <div className="bg-white fixed top-0 right-0 bottom-0 left-0 h-full w-full">
      <div className="relative h-full">

        <div className="flex items-center justify-between">
          <Link href="/">
            <img className="max-w-[105px]" src="/images/logo.png" />
            <span className="sr-only">TribeDance</span>
          </Link>

          <div>
            X
          </div>
        </div>

        <nav className="h-full">

        </nav>

        <div className="mt-auto">
          <Button label="Book a demo" block />
        </div>

      </div>
    </div>
  )
}

function MenuMobile({ isOpen, setMobileOpen }: IMenuMobile) {
  return (
    <>
      {/* <Menu /> */}
      <div className="lg:hidden flex items-center py-4 justify-between">
        <Link href="/">
          <img className="max-w-[105px]" src="/assets/images/logo.png" />
          <span className="sr-only">SalesPlayX</span>
        </Link>
        <button type="button" onClick={() => setMobileOpen(true)}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><g id="Menu / Hamburger_LG"><path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        </button>
      </div>
    </>
  )
}

export default MenuMobile
