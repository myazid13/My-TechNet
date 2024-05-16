import React from "react";
import logoMSN from "../../../assets/images/MSN-PRODUCTION-LOGO.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ButtonWa } from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 md:p-20 footer text-base-100" style={{ backgroundColor: "#e5e7eb" }}>
        <div className="md:flex md:items-center">
          <Link to="/" className="mr-4">
            <img src={logoMSN} alt="My-TechNet" className="w-64" />
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-black">My-TechNet</h1>
            <span className="text-sm sm:text-base text-accent font-medium">
              Jl.Raya Wiyung Menganti No.3 <br />
              Babatan, Kec. Wiyung, <br />
              Surabaya Jawa Timur, 60227.
            </span>
            <div className="flex items-center my-1">
              <FaPhoneAlt className="mr-2 text-lg sm:text-xl text-accent" />
              <h3 className="text-sm sm:text-base font-medium text-accent">+62 858 0455 2821</h3>
            </div>
            <div className="flex items-center my-1">
              <MdEmail className="mr-2 text-lg sm:text-xl text-accent" />
              <h3 className="text-sm sm:text-base font-medium text-accent">mytechnet76@gmail.com</h3>
            </div>
          </div>
        </div>
        {/* Tautan */}
        <div className="mt-4 md:mt-11">
          <span className="text-xl font-bold text-black">Tautan</span>
          <div className="flex flex-col mt-2">
            <Link to="/" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Beranda</span>
            </Link>
            <Link to="/tentang" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Tentang</span>
            </Link>
            <Link to="/layanan" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Layanan</span>
            </Link>
            <Link to="/kontak" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Kontak</span>
            </Link>
            <Link to="/blog" className="link link-hover hover:text-primary text-accent">
              <span>Blog</span>
            </Link>
          </div>
        </div>

        {/* Layanan */}
        <div className="mt-4 md:mt-11">
          <span className="text-xl font-bold text-black">Layanan</span>
          <div className="flex flex-col mt-2">
            <Link to="#" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Web Wedding</span>
            </Link>
            <Link to="#" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Web Company Profile</span>
            </Link>
            <Link to="#" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Servis Laptop</span>
            </Link>
            <Link to="#" className="link link-hover hover:text-primary text-accent mr-4">
              <span>Servis Komputer</span>
            </Link>
            <Link to="#" className="link link-hover hover:text-primary text-accent">
              <span>Digital Marketing & Advertising</span>
            </Link>
          </div>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex items-center mt-11 ">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-3xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
            <FaLinkedin />
          </a>
          <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-3xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/mytechnet76" target="_blank" rel="noopener noreferrer" className="text-3xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
            <FaInstagramSquare />
          </a>
        </div>
      </footer>
      <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-neutral">
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
          <p>&copy; Copyright 2024, My-TechNet All Rights Reserved</p>
        </div>
      </footer>
      <ButtonWa />
    </div>
  );
};

export default Footer;
