import { project } from "@prisma/client";
import { GraphQLNonNull } from "graphql";
import { createProject } from "../../../../data/projectService.js";
import { IApolloServerContext } from "../../../../interfaces/IApolloServerContext.js";
import CreateProjectInput from "../../typedefs/CreateProjectInput.js";
import GqlProject from "../../typedefs/GqlProject.js";

const createProjectMutation = {
    type: GqlProject,
    args: {
        input: {
            type: new GraphQLNonNull(CreateProjectInput),
            description: "The input for creating a project",
        },
    },
    resolve: async (
        _source: unknown,
        { input }: { input: {title : any, short_description : any, long_description : any}},
        _context: IApolloServerContext
    ):  Promise<project> => {
        return createProject(input.title, input.short_description, input.long_description);
    }
};

export default createProjectMutation;