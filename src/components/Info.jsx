import React from "react";

const Info = ({ image, title, description }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" height={120} src={image} alt="Cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      {/* <button className="greenButton">
<img src="img/arrow.svg" alt="Arrow" />
Вернуться назад
</button> */}
    </div>
  );
};

export default Info;
