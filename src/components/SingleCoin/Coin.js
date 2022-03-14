import React from "react";
import Card from "../Card";
const Coin = (props) => {
  const { data } = props;
  return (
    <div style={{ margin: "1rem" }}>
      <Card style={{ margin: "auto", width: "350px", padding: "2rem" }}>
        <div className="title_container">
          <img src={data.image.small} alt={data.name} />
          <h2>{data.name.toUpperCase()}</h2>
          <span>({data.symbol.toUpperCase()})</span>
        </div>
        <div className="body__container">
          <h4>${data.market_data.current_price.usd.toLocaleString()}</h4>
          <p>
            Market Cap:
            <span>${data.market_data.market_cap.usd.toLocaleString()}</span>
          </p>
          <p>
            Max Supply:
            {data.market_data.max_supply ? (
              `$${data.market_data.max_supply.toLocaleString()}`
            ) : (
              <span style={{ fontSize: "1.5rem" }}>∞</span>
            )}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Coin;
