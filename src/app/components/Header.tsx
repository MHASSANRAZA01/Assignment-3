
import Link from 'next/link';


const Header = () => {
  return (
    <header className="stylesheader">
      <div className="styleslogo">
        <Link href="/">My Website</Link>
      </div>
      <nav>
        <ul className="stylesnavList">
          <li>
            <Link href="/" className='home'>Home</Link>
          </li>
          <li>
            <Link href="/Portfolio" className='portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link href="/About" className='about'>About</Link>
          </li>
          <li>
            <Link href="/contact-us" className='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
