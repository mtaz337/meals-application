import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, selectMeal, removeFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image, strMeal: title } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <p className="fav-title">{title.split(" ")[0]}</p>
                <img
                  src={image}
                  className="favorites-img img"
                  onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
