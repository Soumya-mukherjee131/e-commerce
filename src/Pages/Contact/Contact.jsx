import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactBox}>
        <div className={styles.infoContainer}>
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Feel free to reach out with any questions or feedback.</p>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <i className="fas fa-phone"></i> +123 456 7890
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-envelope"></i> support@example.com
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-map-marker-alt"></i> 1234 abc Street, City, Country
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
