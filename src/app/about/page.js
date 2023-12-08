import React from "react";
import styles from "./page.module.css";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/Button/button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src="https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about us"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Website Developers</h1>
          <h2 className={styles.imgDesc}>Creating your designs into reality</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are we ?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>  Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Iaculis urna id volutpat lacus.<br/><br/>  Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.item}>
          <h1>Who we do ?</h1>
          <p className={styles.desc}>
          Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Curabitur vitae nunc sed velit dignissim sodales ut eu. Suscipit adipiscing bibendum est ultricies. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Scelerisque viverra mauris in aliquam sem fringilla ut. Donec pretium vulputate sapien nec sagittis.<br/><br/> - Tristique senectus et netus et malesuada. Semper eget duis at tellus at urna condimentum mattis. Mauris rhoncus aenean vel elit scelerisque mauris. Turpis massa tincidunt dui ut ornare lectus sit amet. Posuere ac ut consequat semper. Sodales ut etiam sit amet nisl purus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt.


          </p>
          <CustomButton 
          url="/contact" text ="Contact Us"/>
        </div>      </div>
    </div>
  );
};

export default About;
