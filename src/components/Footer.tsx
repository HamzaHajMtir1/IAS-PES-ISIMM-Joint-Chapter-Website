'use client';

import { Facebook, Instagram, Link } from "lucide-react";
import { BackToTop } from "./BackToTop";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-green-800 text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6 max-w-7xl mx-auto">
        <p className="text-center text-sm leading-loose md:text-left">
          © {new Date().getFullYear()} IEEE IAS/PES Joint Chapter. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61561012416766" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/ieee_ias_pes_isimm_sbjc/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-pink-400 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};