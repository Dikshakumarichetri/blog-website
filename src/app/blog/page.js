import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?size=626&ext=jpg&ga=GA1.1.268648606.1701855016&semt=sph"
              alt="img text"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
