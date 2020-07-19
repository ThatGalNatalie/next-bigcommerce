function ProductList({ data }) {
  const allProducts = data?.site?.products?.edges ?? [];
  return (
    <div className='product-container'>
      {allProducts.map((item) => {
        const {
          entityId,
          name,
          images,
          path,
          prices,
          plainTextDescription,
        } = item.node;
        const { url } = images.edges[0].node;
        const { value, currencyCode } = prices.price;

        return (
          <div className='card' key={entityId}>
            <img src={url} alt={name} />
            <h1>{name}</h1>
            <p className='price'>${value}</p>
            <p>{plainTextDescription}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        );
      })}

      <style jsx>{`
        .product-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 30px;
          padding: 20px;
        }
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          max-width: 100%;
          margin: auto;
          text-align: center;
          font-family: arial;
          border-radius: 5px;
        }

        .card img {
          max-width: 100%;
          object-fit: cover;
        }

        .price {
          color: grey;
          font-size: 22px;
        }

        .card button {
          border: none;
          outline: 0;
          padding: 10px;
          margin: 10px;
          color: white;
          background-color: #000;
          text-align: center;
          cursor: pointer;
          width: 70%;
          font-size: 18px;
          border-radius: 5px;
        }

        .card button:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}

export default ProductList;
