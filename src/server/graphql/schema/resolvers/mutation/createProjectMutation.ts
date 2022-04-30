import { GraphQLNonNull } from "graphql";
import { createProject } from "../../../../data/types/projectService.js";
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
         { input }: { input: {title : any, short_description : any, long_description : any} }) => {
        const project = await createProject(input.title, input.short_description, input.long_description);
        return project;
    }
};

export default createProjectMutation;