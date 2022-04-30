import { GraphQLObjectType } from "graphql";
import getAllProjectsQuery from "./getAllProjectsQuery.js";

const query = new GraphQLObjectType({
    name: "Query",
    description: "The root query",
    fields: () => ({
        projects: getAllProjectsQuery,
    }),
});

export default query;