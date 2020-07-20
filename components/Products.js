import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ProductList from './ProductList';

const GET_PRODUCTS = gql`
  query paginateProducts {
    site {
      products(first: 50) {
        edges {
          node {
            id
            entityId
            path
            addToCartUrl
            name
            images {
              edges {
                node {
                  url(width: 500)
                }
              }
            }
            plainTextDescription
            prices {
              price {
                value
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>Oh no! We ran into an error while fetching the products :(</p>;

  return (
    <div>
      <section className='products-container'>
        <ProductList data={data} />
      </section>
    </div>
  );
}

export default Products;
