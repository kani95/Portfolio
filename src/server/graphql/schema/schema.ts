import { GraphQLSchema } from 'graphql';
import query from './resolvers/query/query.js';
import mutation from './resolvers/mutation/mutation.js';

const schema: GraphQLSchema = new GraphQLSchema({
    query,
    mutation
});

export default schema;