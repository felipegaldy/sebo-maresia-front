import "./Carrosel.css";
import Carousel from "react-elastic-carousel";

function Carrosel() {
  var items = [
    {
      img: "https://thumbs.dreamstime.com/b/book-shelf-banner-23911530.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/book-shelf-banner-23911530.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/book-shelf-banner-23911530.jpg",
    },
  ];

  return (
    <>
      <Carousel
        itemsToShow={1}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        showArrows={true}
        className="carrosel-container"
      >
        {items.map((item) => (
          <>
            <img className="img-carrosel" src={item.img} alt="Item" />
          </>
        ))}
      </Carousel>
    </>
  );
}

export default Carrosel;
