
'use client'; 

import React, { useState, useEffect } from 'react'; 
import styles from './layout.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]); 

  return (
    <div className={styles.container}>
    
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- Sidebar --- */}
      
      <nav className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarMobileOpen : ''}`}>
        <div className={styles.sidebarLogo}>
          GlobaSend
        </div>
        <ul className={styles.navList}>
          <li className={pathname === '/dashboard' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={pathname === '/dashboard/send' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/send">Send Money</Link>
          </li>
          <li className={pathname === '/dashboard/fund' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/fund">Fund Account</Link>
          </li>
          <li className={pathname === '/dashboard/transactions' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/transactions">Transactions</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">Settings</Link>
          </li>
        </ul>
        <div className={styles.sidebarFooter}>
          <p>Hi, Bob</p>
          <span>bob@example.com</span>
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className={styles.mainContent}>
       
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
        {children}
      </main>
    </div>
  );
}