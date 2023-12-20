function FavoriteItems({ data }) {
  const list = data.length
    ? data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })
    : null;

  const title = data.length ? "Favorite Items" : "No Favorites";
  return (
    <>
      <h3>{title}</h3>
      <ul>{list}</ul>
    </>
  );
}

export default FavoriteItems;
