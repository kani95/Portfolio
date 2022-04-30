import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const GqlProject = new GraphQLObjectType({
    name: "Project",
    description: "A Project",
    fields: () => ({
        project_id: {
            type: new GraphQLNonNull(GraphQLID),
            description: "The id of the project",
        },
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

export default GqlProject;