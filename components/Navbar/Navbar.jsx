import Image from "next/image";
import Link from "next/link";
import NavSearch from "./NavSearch";
import Menu from "./Menu";

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
      <NavSearch />

      <Menu />
    </nav>
  );
}

export default Navbar;
