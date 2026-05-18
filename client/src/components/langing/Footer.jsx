import React from "react";
import { FaGithub,FaTwitter  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8FAFF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo + Description */}
          <div className="space-y-4">
            
            {/* Add Logo Here */}
            <h1 className="text-3xl font-bold text-slate-900">
              ResumeForge
              <span className="text-blue-600">.</span>
            </h1>

            <p className="text-slate-600 leading-relaxed max-w-sm">
              Build professional ATS-friendly resumes with AI in minutes.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="hover:text-blue-600 transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              
              <a
                href="/"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <FaTwitter className="w-5 h-5" />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <IoMdMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-slate-500">
            © 2025 ResumeForge AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="/privacy" className="hover:text-blue-600 transition">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-blue-600 transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;