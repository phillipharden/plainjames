import React, { useState } from "react";
import "../styles/navbar.css";
import {
  SiApplemusic,
  SiSpotify,
  SiTiktok,
  SiYoutube,
  SiInstagram,
  SiCashapp,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { IoShareSocial } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaShopify } from "react-icons/fa6";

const Navbar = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleSocialMenu = () => setShowSocialMenu(!showSocialMenu);
  const toggleNavMenu = () => setShowNavMenu(!showNavMenu);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Plain James</div>

        {/* First nav: Page links */}
        <ul className={`main-nav ${showNavMenu ? "active" : ""}`}>
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a
              href="https://plainjamesdw.wufoo.com/forms/plain-james-booking-request/"
              target="_blank"
              rel="noopener noreferrer">
              Booking
            </a>
          </li>
        </ul>

        {/* Second nav: Social icons */}
        <ul className={`social-links ${showSocialMenu ? "active" : ""}`}>
          <li>
            <a
              href="https://www.facebook.com/TrapTheology"
              target="_blank"
              rel="noopener noreferrer">
              <TfiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/plainjamesdw/"
              target="_blank"
              rel="noopener noreferrer">
              <SiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/PlainJamesDW"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC-EM3ktpbSnJjRZjrcWdN0g"
              target="_blank"
              rel="noopener noreferrer">
              <SiYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@traptheology"
              target="_blank"
              rel="noopener noreferrer">
              <SiTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/us/artist/plain-james/437311151"
              target="_blank"
              rel="noopener noreferrer">
              <SiApplemusic />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/4aBcwMGnLwKP2kq9SD71G2?si=oGIejBdKQpGge17DP5foAg"
              target="_blank"
              rel="noopener noreferrer">
              <SiSpotify />
            </a>
          </li>
          <li>
            <a
              href="https://cash.app/$PlainJamesDW"
              target="_blank"
              rel="noopener noreferrer">
              <SiCashapp />
            </a>
          </li>
          <li>
            <a
              href="https://traptheology.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaShopify />
            </a>
          </li>
          <li>
            <a href="mailto:Info@traptheology.com">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>

      <div>
        {/* Hamburger for nav menu */}
        <div
          className="hamburger nav-toggle"
          onClick={toggleNavMenu}
          aria-label="Toggle navigation menu">
          <GiHamburgerMenu />
        </div>

        {/* Hamburger for social links */}
        <div
          className="hamburger social-toggle"
          onClick={toggleSocialMenu}
          aria-label="Toggle social menu">
          <IoShareSocial />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
