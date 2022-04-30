import Project from './Project.js';

export const getAllProjects = async () => {
    const projects = await Project.findAll();
    return projects;
};

export const createProject = async (title: string, short_description: string, long_description: string) => {
    const project = await Project.create({
        title,
        short_description,
        long_description,
    });
    return project;
};