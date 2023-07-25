import React from 'react'


import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <h1>React Formik</h1>
      </div>
    </div>
  )
}

export default Header;