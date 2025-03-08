import { Link } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-green-800 text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
        <p className="text-center text-sm leading-loose md:text-left">
          © {new Date().getFullYear()} IEEE IAS/PES Joint Chapter. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="https://ieee.org" className="text-sm font-medium hover:underline underline-offset-4">
            IEEE.org
          </Link>
        </div>
      </div>
    </footer>
  );
};