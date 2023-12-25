import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  console.log(data,"datauuuuuuuuuu");
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              src={item.img}
              alt="img text"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
