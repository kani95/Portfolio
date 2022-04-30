import { GraphQLList } from 'graphql';
import { getAllProjects } from '../../../../data/types/projectService.js';
import GqlProject  from './../../typedefs/GqlProject.js';

const projects = [
    {
        project_id: 1,
        title: 'Project 1',
        short_description: 'Short description',
        long_description: 'Long description',
    },
    {
        project_id: 2,
        title: 'Project 2',
        short_description: 'Short description',
        long_description: 'Long description',
    },
];

const getAllProjectsQuery = {
    type: new GraphQLList(GqlProject),
    resolve: async (_source: unknown) => {
        return await getAllProjects();
    },
};

export default getAllProjectsQuery;