import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const CreateProjectInput = new GraphQLInputObjectType({
    name: "CreateProjectInput",
    description: "The input for creating a project",
    fields: () => ({
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The title of the project",
        },
        short_description: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The short description of the project",
        },
        long_description: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The long description of the project",
        },
    })
});

export default CreateProjectInput;