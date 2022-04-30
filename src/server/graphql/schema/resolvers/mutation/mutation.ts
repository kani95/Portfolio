import { GraphQLObjectType } from "graphql";
import createProjectMutation from "./createProjectMutation.js";

const mutation = new GraphQLObjectType({
    name: "Mutation",
    description: "The root mutation",
    fields: () => ({
        createProject: createProjectMutation,
    }),
});

export default mutation;