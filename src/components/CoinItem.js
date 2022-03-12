import React from "react";
import { Link } from "react-router-dom";

const CoinItem = (props) => {
  const { coin } = props;
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src={coin.image} width="20rem" height="20rem" alt={coin.name} />
          <div>
            <Link
              className="hover__link"
              to={`/coins/${coin.id}`}
              style={{
                color: "#000",
                textDecoration: "none",
              }}
            >
              {coin.name}
            </Link>
          </div>
          <div style={{ fontSize: "1rem", color: "#6c757d" }}>
            ({coin.symbol})
          </div>
        </div>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.max_supply ? (
          coin.max_supply.toLocaleString()
        ) : (
          <div style={{ fontSize: "2rem" }}>&#8734;</div>
        )}
      </td>
      <td>${coin.market_cap.toLocaleString()}</td>
    </tr>
  );
};

export default CoinItem;
