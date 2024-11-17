import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-black py-3 px-6 fixed top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="UCLA Poker Club"
            height={60}
            width={100}
            className="logo"
          />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="px-4 text-lg cursor-pointer text-gray hover:text-white transition-all"
          >
            Home
          </Link>
          <Link
            href="/"
            className="px-4 text-lg cursor-pointer text-gray hover:text-white transition-all"
          >
            About
          </Link>
          <Link
            href="/"
            className="px-4 text-lg cursor-pointer text-gray hover:text-white transition-all"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="px-4 text-lg cursor-pointer join-button text-gray hover:text-white transition-all"
          >
            Join
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
