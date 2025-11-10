
'use client';

import React, { useState } from 'react';
import styles from './page.module.css'; // We'll create this CSS next

export default function FundAccountPage() {
  
  const [amount, setAmount] = useState('500000'); 
  const [selectedMethod, setSelectedMethod] = useState('opay'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    alert(
      `Mock Success!\n\nProceeding to fund ${amount} NGN via ${selectedMethod === 'opay' ? 'OPay/PalmPay' : 'Bank Transfer'}.`
    );
  };

  return (
    <div className={styles.container}>
      <form className={styles.flowBox} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Fund Your Wallet</h1>
        <p className={styles.subtitle}>
          Add money to your GlobaSend NGN wallet.
        </p>

        {/* --- Amount Input --- */}
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount to Add (NGN)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="500000"
          />
        </div>

        {/* --- Funding Method --- */}
        <div className={styles.formGroup}>
          <label>Choose Funding Method</label>
          <div className={styles.optionList}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                selectedMethod === 'opay' ? styles.optionActive : ''
              }`}
              onClick={() => setSelectedMethod('opay')}
            >
              <span className={styles.optionTitle}>OPay / PalmPay</span>
              <span className={styles.optionDesc}>Instant funding.</span>
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                selectedMethod === 'bank' ? styles.optionActive : ''
              }`}
              onClick={() => setSelectedMethod('bank')}
            >
              <span className={styles.optionTitle}>Bank Transfer</span>
              <span className={styles.optionDesc}>
                Pay to your dedicated virtual account.
              </span>
            </button>
          </div>
        </div>

        <button type="submit" className={styles.primaryButton}>
          Continue
        </button>
      </form>
    </div>
  );
}