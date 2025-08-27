

import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subscription-form-container enhanced-ui">
      <h1 className="form-title">Subscribe to Our Newsletter</h1>
      <p className="form-description">Stay updated! Fill in your details below to receive our latest news and offers.</p>
      {submitted ? (
        <div className="success-message">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e6ffe6"/><path d="M7 13l3 3 7-7" stroke="#2d662d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <h2>Thank you for subscribing!</h2>
          <div className="submitted-info">
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> {form.phone}</p>
          </div>
        </div>
      ) : (
        <form className="subscription-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. +123456789" />
          </div>
          <button className="submit-btn" type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default App;
