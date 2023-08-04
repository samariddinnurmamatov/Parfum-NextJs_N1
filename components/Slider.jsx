// components/Slider.js

function Slider({ categories }) {
  return (
    <div className="slider">
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
}

export default Slider;
