import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Butcherman } from 'next/font/google'
import CustomButton from '@/components/Button/button'
const Contact=()=> {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Get In Touch
      </h1>
      <div className={styles.content}>
<div className={styles.imgContainer}>
<Image
src="/contact.png"
alt="contact image"
fill={true}
className={styles.image}/>
</div>
<form className={styles.form}>
<input type='text' placeholder="Name" className={styles.input}/>
<input type='text' placeholder="Email" className={styles.input}/>
<textarea className={styles.textarea} placeholder="Write more about the issue" cols="30" rows="10">

</textarea>
<CustomButton  
url="#"
text="Send"/>
</form>
      </div>
    </div>
  )
}

export default Contact