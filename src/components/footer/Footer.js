import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
      123@blogwebsite All Rights Reserved
      </div>
     <div className={styles.socialicons}>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
        alt="Facebook Icon"
        width={15} 
        className={styles.icons}
        height={15}
      />   
       <Image
        src="https://cdn-icons-png.flaticon.com/128/13171/13171412.png"
        alt="Facebook Icon"
        width={15}
        className={styles.icons}
        height={15}
      /> 
       <Image
        src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
        alt="Facebook Icon"
        width={15}
        className={styles.icons}
        height={15}
      /> 
       <Image
        src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
        alt="Facebook Icon"
        width={15}
        className={styles.icons}
        height={15}
      /> </div>   </div>
  )
}

export default Footer