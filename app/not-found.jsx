import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center mt-10 h-[500px]">
      <h1 className="text-8xl">404</h1>
      <p className="text-xl my-5">Page not found</p>
      <Link href="/" className="text-primary hover:underline">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
