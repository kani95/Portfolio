
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import schema from './graphql/schema/schema.js';
import { IApolloServerContext } from './interfaces/IApolloServerContext.js';
import prisma from './prisma/client.js';

dotenv.config();

const serve = async () => {
  const context: IApolloServerContext = {
    prisma
  };

  const server = new ApolloServer({ 
    schema,
    context
  });

  server.listen()
  .then(async ({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(err => { 
    console.log(err) 
  });
};

serve();