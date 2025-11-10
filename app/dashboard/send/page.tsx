// This is a client component to manage the 3-step flow
'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

// Mock data for the "AI Preview"
const MOCK_RATE = 1850.75;
const MOCK_FEE_NGN = 1450.00; // $1.00 @ 1450 NGN/USD

export default function SendMoneyPage() {
  // This state controls which step we're on (1, 2, or 3)
  const [step, setStep] = useState(1);
  
  // This state holds the data from the form
  const [amount, setAmount] = useState('20.00'); // Bob sends £20
  const [preview, setPreview] = useState({
    rate: '0.00',
    fee: '0.00',
    ngnAmount: '0.00',
    total: '0.00',
  });

  // This is the "AI-Powered Preview" from your white paper
  // It re-calculates every time the 'amount' changes
  useEffect(() => {
    const numAmount = parseFloat(amount) || 0;
    const ngnAmount = numAmount * MOCK_RATE;
    const total = ngnAmount + MOCK_FEE_NGN;

    setPreview({
      rate: MOCK_RATE.toLocaleString('en-US', { minimumFractionDigits: 2 }),
      fee: MOCK_FEE_NGN.toLocaleString('en-US', { minimumFractionDigits: 2 }),
      ngnAmount: ngnAmount.toLocaleString('en-US', { minimumFractionDigits: 2 }),
      total: total.toLocaleString('en-US', { minimumFractionDigits: 2 }),
    });
  }, [amount]); // Dependency array: run this code when 'amount' changes


  // --- Step 1: Enter Amount ---
  const renderStep1 = () => (
    <div className={styles.flowBox}>
      <h1 className={styles.title}>Send Money</h1>
      <p className={styles.subtitle}>Send money to anyone, instantly.</p>
      
      <div className={styles.amountInputGroup}>
        <label>Recipient Gets Exactly</label>
        <div className={styles.inputWithCurrency}>
          <span>£</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="20.00"
          />
          <span className={styles.currencyTag}>GBP</span>
        </div>
      </div>

      <div className={styles.recipientSelector}>
        <label>Select Recipient</label>
        <select>
          <option>Alice O. (Revolut - **** 1234)</option>
          <option>John D. (Barclays - **** 5678)</option>
        </select>
      </div>

      {/* --- AI Preview Pane --- */}
      <div className={styles.aiPreviewPane}>
        <div className={styles.aiBadge}>AI-Powered Preview</div>
        <div className={styles.previewRow}>
          <span>Exchange Rate</span>
          <span>1 GBP = {preview.rate} NGN</span>
        </div>
        <div className={styles.previewRow}>
          <span>Transaction Fee</span>
          <span>{preview.fee} NGN ($1.00)</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.previewRowTotal}>
          <span>Total you will pay</span>
          <span>{preview.total} NGN</span>
        </div>
      </div>
      
      <button className={styles.primaryButton} onClick={() => setStep(2)}>
        Continue
      </button>
    </div>
  );

  // --- Step 2: Confirmation ---
  const renderStep2 = () => (
    <div className={styles.flowBox}>
      <h1 className={styles.title}>Review Your Transfer</h1>
      <p className={styles.subtitle}>Please confirm the details below.</p>

      <div className={styles.confirmationBox}>
        <h3>Recipient Gets:</h3>
        <span className={styles.confirmValueLarge}>£{parseFloat(amount).toFixed(2)}</span>

        <h3>Sending to:</h3>
        <span className={styles.confirmText}>Alice O. (Revolut - **** 1234)</span>
        
        <div className={styles.divider}></div>
        
        <div className={styles.previewRow}>
          <span>Exchange Rate</span>
          <span>1 GBP = {preview.rate} NGN</span>
        </div>
        <div className={styles.previewRow}>
          <span>Amount in NGN</span>
          <span>{preview.ngnAmount} NGN</span>
        </div>
        <div className={styles.previewRow}>
          <span>Transaction Fee</span>
          <span>{preview.fee} NGN</span>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.previewRowTotal}>
          <span>Total to be deducted</span>
          <span>{preview.total} NGN</span>
        </div>
        
        <p className={styles.guaranteeText}>
          Guaranteed amount. No hidden fees. <br />
          Alice will receive this in under 10 seconds.
        </p>

        <button className={styles.primaryButton} onClick={() => setStep(3)}>
          Confirm & Send
        </button>
        <button className={styles.secondaryButton} onClick={() => setStep(1)}>
          Go Back
        </button>
      </div>
    </div>
  );

  // --- Step 3: Success ---
  const renderStep3 = () => (
    <div className={styles.flowBox}>
      <div className ={styles.successBox}>
        <div className={styles.successIcon}>✅</div>
        <h1 className={styles.title}>Success!</h1>
        <p className={styles.subtitle}>
          You sent <strong>£{parseFloat(amount).toFixed(2)}</strong> to Alice.
        </p>
        <span className={styles.txId}>Transaction ID: GBS-12948</span>
        <p>
          The funds have been instantly credited to her Revolut account.
        </p>
        <button 
          className={styles.primaryButton} 
          onClick={() => {
            // In a real app, you'd go to /dashboard, but for the prototype,
            // we'll just reset the flow.
            setStep(1); 
            // router.push('/dashboard'); // Use this to go back to dashboard
          }}
        >
          Make Another Transfer
        </button>
      </div>
    </div>
  );

  // This is the main logic to decide which step to show
  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className={styles.container}>
      {renderCurrentStep()}
    </div>
  );
}