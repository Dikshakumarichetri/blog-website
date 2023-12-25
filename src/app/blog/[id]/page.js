import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    next:{revalidate:10}
  })
 
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
// or Dynamic metadata
export async function generateMetadata({ params }) {
  const activePost =await getData(params.id)
  return {
    title: activePost.title,
    description:activePost.desc
  }
}
const BlogId = async({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src={data.img}
              alt="img text"
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          fill={true}
          src={data.img}
          alt="img text"
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
        {data.content}
        </p>
</div>
    </div>

  );
};

export default BlogId;
