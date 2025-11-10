// This MUST be a client component to track the active page
'use client'; 

import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the hook

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current URL path
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      {/* --- Sidebar --- */}
      <nav className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          GlobaSend
        </div>
        <ul className={styles.navList}>
          {/* We'll use Next.js <Link> for navigation */}
          <li className={pathname === '/dashboard' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={pathname === '/dashboard/send' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/send">Send Money</Link>
          </li>
          <li className={pathname === '/dashboard/fund' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/fund">Fund Account</Link>
          </li>
          
          {/* --- THIS IS THE UPDATE --- */}
          <li className={pathname === '/dashboard/transactions' ? styles.navItemActive : styles.navItem}>
            <Link href="/dashboard/transactions">Transactions</Link>
          </li>
          {/* --- END OF UPDATE --- */}

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
        {children}
      </main>
    </div>
  );
}