import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => (
  <header className="padding-x py-8 absolute z-10 w-full border border-red-500">
    <nav className="flex justify-between items-center max-container border border-blue-500">
      <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
      </a>
      <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red hover:font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="max-lg:hidden">
        <Button label="Contact Us" />
      </div>
      <div className="lg:hidden">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
    </nav>
  </header>
);

export default Nav;
