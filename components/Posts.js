import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const querydocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(querydocs);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts?.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.name}
            message={post.message}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}
          />
        );
      })}
    </div>
  );
}

export default Posts;
