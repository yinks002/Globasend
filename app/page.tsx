// This must be a client component for useState and onClick
'use client';

// Import our custom styles for THIS page
import styles from './page.module.css'; 

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  // This state controls which tab is active: 'login' or 'signup'
  const [activeTab, setActiveTab] = useState('login');

  // --- MOCKED FUNCTIONALITY ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'login') {
      console.log('Attempting login...');
    } else {
      console.log('Attempting sign up...');
    }

    // We can't use a library toast, so we'll just log
    // and redirect.
    alert('Mock Success! Redirecting to dashboard...');

    // Redirect to the dashboard page
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000); // 1 second delay
  };

  const renderLoginForm = () => (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" placeholder="bob@example.com" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" placeholder="••••••••" required />
      </div>
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </form>
  );

  const renderSignUpForm = () => (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="signup-name">Full Name</label>
        <input id="signup-name" type="text" placeholder="Bob O." required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" type="email" placeholder="bob@example.com" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" placeholder="••••••••" required />
      </div>
      <button type="submit" className={styles.submitButton}>
        Create Account
      </button>
    </form>
  );

  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>GlobaSend</h1>
          <p className={styles.subtitle}>
            The future of cross-border payments.
          </p>
        </div>

        {/* --- Tab Controls --- */}
        <div className={styles.tabList}>
          <button
            // Dynamically set the class
            className={`${styles.tab} ${activeTab === 'login' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'signup' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* --- Tab Content --- */}
        <div>
          {activeTab === 'login' ? renderLoginForm() : renderSignUpForm()}
        </div>
        
      </div>
    </main>
  );
}