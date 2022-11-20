import Card from "../components/Card";
import { API_URL } from "../services/constants";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}posts?_start=1&_limit=10`).then((res) =>
      res.json().then((data) => setPosts(data))
    );
  }, []);

  return (
    <main className="w-full">
      <div className="container mx-auto py-10">
        <div className="w-full grid grid-cols-3 gap-y-3 gap-x-3 mb-5">
          {posts &&
            posts.map((post) => {
              return <Card key={post.id} article={post} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Home;
