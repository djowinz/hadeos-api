import { ApolloServer } from 'apollo-server';

import { environment } from './utils/environment';
// import resolvers from './resolvers';
import typeDefs from './type-defs';

const server = new ApolloServer({
    resolvers: {},
    typeDefs,
    playground: environment.apollo.playground,
    cacheControl: {
      defaultMaxAge: 0,
    },
});

server.listen(environment.port)
  .then(({ url }) => {
    console.log(`Server ready at ${url}. `);
  });

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}