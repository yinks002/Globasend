
'use client';


import styles from './page.module.css'; 

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('login');

  // --- MOCKED FUNCTIONALITY ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'login') {
      console.log('Attempting login...');
    } else {
      console.log('Attempting sign up...');
    }

 
    alert('Mock Success! Redirecting to dashboard...');

    
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000); 
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

        <div className={styles.tabList}>
          <button
           
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

       
        <div>
          {activeTab === 'login' ? renderLoginForm() : renderSignUpForm()}
        </div>
        
      </div>
    </main>
  );
}