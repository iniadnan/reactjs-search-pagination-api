import Card from "../components/Card";
import useFetch from "../services/useFetchPosts";

const Home = () => {
  const [data] = useFetch("posts", "1");

  return (
    <main className="w-full">
      <div className="container mx-auto py-10">
        <div className="w-full grid grid-cols-3 gap-y-3 gap-x-3">
          {data &&
            data.map((item) => {
              return <Card key={item.id} article={item} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Home;
