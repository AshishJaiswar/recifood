import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import SearchForm from "./SearchForm";
import MobileSearch from "./MobileSearch";

function Navbar() {
  return (
    <nav id="nav-container" className="pt-2 flex justify-between items-center">
      <Link href="/">
        <Image
          id="logo"
          src="/logo.svg"
          width={100}
          height={50}
          alt="ReciFood"
        />
      </Link>
      {/* Search Input Desktop */}
      <div className="hidden lg:block">
        <SearchForm />
      </div>
      {/* Search Input Mobile */}
      <div className="lg:hidden">
        <MobileSearch />
      </div>
      <Menu />
    </nav>
  );
}

export default Navbar;
