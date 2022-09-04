const Card = ({ article }) => {
  return (
    <article className="bg-gray-700 py-4 px-4 rounded">
      <h2 className="font-medium text-xl text-gray-50 text-center mb-2">
        {article.title}
      </h2>
      <p className="text-base text-gray-200">{article.body}</p>
    </article>
  );
};

export default Card;
