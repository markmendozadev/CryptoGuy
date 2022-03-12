import React from "react";

const CoinTable = ({ children }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Rank</td>
          <td>Coin</td>
          <td>Price</td>
          <td>Supply</td>
          <td>Market Cap</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default CoinTable;
