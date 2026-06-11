import React, { useState } from 'react';
import './Contact.css';

const details = [
  { label: 'Location', value: 'Thamel, Kathmandu, Nepal' },
  { label: 'Hours', value: 'Daily · 12pm – 11pm' },
  { label: 'Email', value: 'hello@nuptsebrewing.com' },
  { label: 'Phone', value: '+977 1 XXXXXXX' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <p className="section-label">Find Us</p>
        <h2 className="section-title section-title--light">Come visit</h2>
        <div className="divider-line" />

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              We're open seven days a week. Walk-ins always welcome — no need to book unless
              you're bringing a big group.
            </p>
            {details.map((d) => (
              <div className="contact__detail" key={d.label}>
                <span className="contact__detail-label">{d.label}</span>
                <span className="contact__detail-value">{d.value}</span>
              </div>
            ))}
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="contact__input"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              className="contact__input contact__textarea"
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={`contact__submit ${sent ? 'contact__submit--sent' : ''}`}
            >
              {sent ? 'Message sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
