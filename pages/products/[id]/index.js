import { useRouter } from 'next/router';
import Navbar from './../../../components/Navbar';

const ProductsDetails = () => {
  const router = useRouter();
  const { id, name, url, plainTextDescription, value } = router.query;

  return (
    <div>
      <Navbar />
      <div className='product-details-container'>
        <img src={url} alt={name} />
        <div>
          <h1>{name}</h1>
          <h2>${value}</h2>
          <button>Add To Cart</button>
        </div>
      </div>

      <hr />
      <p>Product Description</p>
      <p>{plainTextDescription}</p>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        .product-details-container {
          margin: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 50px;
        }

        .product-details-container img {
          max-width: 100%;
          object-fit: cover;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
        }

        .product-details-container h1 {
          font-family: 'Lato', sans-serif;
        }

        .product-details-container button {
          border: none;
          outline: 0;
          padding: 10px;
          // margin: 10px;
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
};

export default ProductsDetails;
