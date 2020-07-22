import { withApollo } from 'next-apollo';
import { InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import ApolloClient from 'apollo-client';

const apolloClient = new ApolloClient({
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
      },
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: 'https://themedley.mybigcommerce.com/graphql',
    })
  ),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
