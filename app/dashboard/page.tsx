
'use client'; 

import React from 'react';
import styles from './page.module.css'; 
import { useRouter } from 'next/navigation'; 

export default function DashboardPage() {
  const router = useRouter(); 

  // Mock data for Bob
  const mockData = {
    balance: '500,000.00',
    currency: 'NGN',
    transactions: [
      { id: 1, desc: 'Sent to Alice O. (Revolut)', amount: '-£20.00', status: 'negative' },
      { id: 2, desc: 'Funded from OPay', amount: '+NGN 500,000.00', status: 'positive' },
      { id: 3, desc: 'Received from John D.', amount: '+NGN 15,000.00', status: 'positive' },
    ],
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hi, Bob</h1>
      <p className={styles.subtitle}>Welcome back to your dashboard.</p>

      {/* --- Balance Card --- */}
      <div className={styles.balanceCard}>
        <span className={styles.balanceLabel}>Total Balance</span>
        <span className={styles.balanceValue}>
          {mockData.currency} {mockData.balance}
        </span>
      </div>

      {/* --- Action Buttons --- */}
      <div className={styles.actionButtons}>
        <button
          className={styles.primaryButton}
          onClick={() => router.push('/dashboard/send')}
        >
          Send Money
        </button>
        {/* --- THIS IS THE UPDATE --- */}
        <button 
          className={styles.secondaryButton}
          onClick={() => router.push('/dashboard/fund')} // <-- Add navigation
        >
          Fund Account
        </button>
        {/* --- END OF UPDATE --- */}
      </div>

      {/* --- Recent Transactions --- */}
      <h2 className={styles.sectionTitle}>Recent Transactions</h2>
      <div className={styles.txList}>
        {mockData.transactions.map((tx) => (
          <div className={styles.txItem} key={tx.id}>
            <span className={styles.txDesc}>{tx.desc}</span>
            <span 
              className={`${styles.txAmount} ${tx.status === 'positive' ? styles.positive : styles.negative}`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}