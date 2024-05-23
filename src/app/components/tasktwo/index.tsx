'use client';
import { useState } from 'react';
import styles from './navbar.module.css';

const TaskTwo: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false); // Close search bar if menu is opened
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false); // Close menu if search bar is opened
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.logo}>Aeon</div>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
            <li><a href="/">Showcase</a></li>
            <li><a href="/">Docs</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Analytics</a></li>
            <li><a href="/">Templates</a></li>
            <li><a href="/">Enterprise</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <input
            type="text"
            placeholder="Search documentation"
            className={`${styles.searchBar} ${searchOpen ? styles.showSearch : ''}`}
          />
          <button className={styles.searchButton} onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      <small className='mt-8 text-xs'>Mobile View is also done</small>

    </div>

  );
};

export default TaskTwo;
