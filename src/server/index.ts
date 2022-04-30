
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import schema from './graphql/schema/schema.js';

dotenv.config();

const server = new ApolloServer({ 
  schema,
});

const serve = async () => {
  server.listen()
  .then(async ({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(err => { 
    console.log(err) 
  });
};

serve();