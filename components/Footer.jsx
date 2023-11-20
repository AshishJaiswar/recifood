import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[url('/footer_bg.png')] absolute left-0 w-full md:bg-cover md:px-28">
      <div className="container md:flex">
        <div className="text-center py-5 md:py-16 md:text-left md:mr-10">
          <h3 className="text-lg font-medium text-slate-700 py-5 sm:text-2xl px-10 md:px-0">
            Tools
          </h3>
          <div id="tools" className="flex flex-col text-slate-500">
            <Link href="/" className="my-1 hover:text-slate-900">
              Generate random recipe
            </Link>
            <Link href="/recipes" className="my-1 hover:text-slate-900">
              Explore recipes
            </Link>
            {/* <Link href="" className="my-1 hover:text-slate-900">
              Explore cuisines
            </Link> */}
          </div>
        </div>
        {/* <div className="text-center py-5 md:py-16  md:text-left">
          <h3 className="text-lg font-medium text-slate-700 py-5 sm:text-2xl px-10 md:px-0">
            Socials
          </h3>
          <div id="socials" className="flex flex-col text-slate-500 ">
            <Link href="" className="my-1 hover:text-slate-900">
              Instagram
            </Link>
            <Link href="" className="my-1 hover:text-slate-900">
              Youtube
            </Link>
            <Link href="" className="my-1 hover:text-slate-900">
              Twitter
            </Link>
          </div>
        </div> */}
      </div>
      <div className="px-5">
        <hr className="border border-gray-300" />
      </div>
      <div className="flex items-center justify-between px-5">
        <Image
          id="logo"
          src="/logo.svg"
          width={100}
          height={50}
          alt="ReciFood"
        />
        <span>Made with 💓 & Next.js</span>
      </div>
      <p className="px-5 text-center mb-10 mt-3">
        &copy; Recifood by{" "}
        <Link
          href="https://www.ashishjaiswar.com/"
          target="_blank"
          className="font-medium"
        >
          Ashish Jaiswar
        </Link>
        . All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
