import { Slackey } from "next/font/google";
import Link from "next/link";

const slackey = Slackey({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="relative bg-black py-10">
      <div className="">
        <div className="">
          <h3 className="text-center text-2xl text-white" style={slackey.style}>
            Maher<span className="text-[#e85f5b]">19</span>
          </h3>
          <div className="mx-auto mt-1 h-1 w-20 bg-[#e85f5b]"></div>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-white">
          <Link href="#" className="text-white hover:text-[#e85f5b]">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-[#e85f5b]">
            About
          </Link>
          <Link href="#" className="text-white hover:text-[#e85f5b]">
            Portfolio
          </Link>
          <Link href="#" className="text-white hover:text-[#e85f5b]">
            Contact
          </Link>
        </div>
        <div className="mt-8 flex w-full justify-center gap-x-6">
          <p className="text-white">
            &copy; Copyright 2024. All rights reserved.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="my-auto text-xs text-white">
            Made with &#x2764;&#xfe0f; by Maher
            <span className="text-[#e85f5b]">19</span>
          </p>
        </div>
      </div>
      {/* <p className="absolute bottom-10 right-10 my-auto text-xs text-white">
        Made with &#x2764;&#xfe0f; by Maher
        <span className="text-[#e85f5b]">19</span>
      </p> */}
    </footer>
  );
}
