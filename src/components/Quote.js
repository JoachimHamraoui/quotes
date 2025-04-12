const Quote = ({quote, author}) => {
  return (
    <div className="w-1/2 flex flex-col">
      <h1 className="text-4xl font-noto italic mb-4">"{quote}"</h1>
      <p className="text-2xl font-noto">- {author}</p>
    </div>
  );
};

export default Quote;