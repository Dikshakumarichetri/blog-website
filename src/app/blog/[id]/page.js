import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{revalidate:10}
  })
 
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
const BlogId = async({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?size=626&ext=jpg&ga=GA1.1.268648606.1701855016&semt=sph"
              alt="img text"
            />
            <span className={styles.username}>John name</span>
          </div>
        </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          fill={true}
          src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?size=626&ext=jpg&ga=GA1.1.268648606.1701855016&semt=sph"
          alt="img text"
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
        tegsjhsjsj
        </p>
</div>
    </div>

  );
};

export default BlogId;
