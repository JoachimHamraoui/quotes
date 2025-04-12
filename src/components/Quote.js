const Quote = ({quote, author}) => {
  return (
    <>
      <h1 className="text-4xl font-noto italic">"{quote}"</h1>
      <p className="text-2xl font-noto">- {author}</p>
    </>
  );
};

export default Quote;