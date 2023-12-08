import Image from "next/image";
import styles from "./page.module.css";
import HomeImg from "../../public/home.png";
import CustomButton from "@/components/Button/button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Your imaginative and prescient, Our expertise
          {/* Your imaginative and prescient, Our expertise: building lovely web sites to your commercial enterprise */}
        </h1>
        <p className={styles.desc}>
          Remodeling visions into effective on-line reviews—our professional
          crew crafts custom websites that captivate, interact, and increase
          your emblem.
        </p>
        <CustomButton
        url="/portfolio"
          text="See Our Work"
        />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={HomeImg} alt="home image" />
      </div>
    </div>
  );
}
