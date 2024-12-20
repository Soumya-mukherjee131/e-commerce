import React, { useState } from 'react';
import img from '../../Assests/Images/login1.jpg';
import styles from './Login.module.css';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.imageContainer}>
          <img src={img} alt="Login" className={styles.image} />
        </div>
        <div className={styles.loginContainer}>
          <header className={styles.header}>
            <h1>Welcome Back</h1>
            <p>Log in to your account</p>
          </header>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
          </form>
          <footer className={styles.footer}>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
