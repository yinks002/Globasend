// This is a client component to manage the filters
'use client';

import React, { useState } from 'react';
import styles from './page.module.css'; // We'll create this CSS next

// Mock data for a long list of transactions
const MOCK_TRANSACTIONS = [
  { id: 1, type: 'sent', desc: 'Sent to Alice O. (Revolut)', amount: '-£20.00', date: 'Oct 26, 2025' },
  { id: 2, type: 'received', desc: 'Funded from OPay', amount: '+NGN 500,000.00', date: 'Oct 26, 2025' },
  { id: 3, type: 'received', desc: 'Received from John D.', amount: '+NGN 15,000.00', date: 'Oct 25, 2025' },
  { id: 4, type: 'sent', desc: 'Sent to Utility Bill', amount: '-NGN 8,500.00', date: 'Oct 24, 2025' },
  { id: 5, type: 'received', desc: 'Freelance Payment', amount: '+£1,200.00', date: 'Oct 22, 2025' },
  { id: 6, type: 'sent', desc: 'Sent to M. Oladimeji', amount: '-NGN 50,000.00', date: 'Oct 20, 2025' },
  { id: 7, type: 'sent', desc: 'Netflix Subscription', amount: '-£10.99', date: 'Oct 19, 2025' },
  { id: 8, type: 'received', desc: 'Refund from Amazon', amount: '+£45.50', date: 'Oct 18, 2025' },
];

export default function TransactionsPage() {
  // This state holds the active filter
  const [filter, setFilter] = useState('all'); // 'all', 'sent', or 'received'

  // This filters the list based on the active state
  const filteredTransactions = MOCK_TRANSACTIONS.filter(tx => {
    if (filter === 'all') return true;
    return tx.type === filter;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Transactions</h1>
      <p className={styles.subtitle}>View your complete transaction history.</p>

      {/* --- Filter Buttons --- */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${filter === 'all' ? styles.filterActive : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'sent' ? styles.filterActive : ''}`}
          onClick={() => setFilter('sent')}
        >
          Sent
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'received' ? styles.filterActive : ''}`}
          onClick={() => setFilter('received')}
        >
          Received
        </button>
      </div>

      {/* --- Full Transactions List --- */}
      <div className={styles.txList}>
        {filteredTransactions.map((tx) => (
          <div className={styles.txItem} key={tx.id}>
            {/* I'll add a simple icon for visual flair */}
            <div className={`${styles.txIcon} ${tx.type === 'sent' ? styles.iconSent : styles.iconReceived}`}>
              {tx.type === 'sent' ? '↑' : '↓'}
            </div>
            <div className={styles.txDetails}>
              <span className={styles.txDesc}>{tx.desc}</span>
              <span className ={styles.txDate}>{tx.date}</span>
            </div>
            <span 
              className={`${styles.txAmount} ${tx.type === 'received' ? styles.positive : styles.negative}`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}