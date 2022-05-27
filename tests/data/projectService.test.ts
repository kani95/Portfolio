import { project } from '@prisma/client';
import prismaMock from '../mocks/prismaSingelton';
import { createProject, getAllProjects } from './../../src/server/data/projectService';

describe('project service tests', () => {
    describe('create project test', () => {
        test('it should create project with passed in args', async () => {
           const mockProject: project = {
                project_id: 5,
                title: 'Project 5',
                short_description: 'Short description',
                long_description: 'Long description',
            };
            prismaMock.project.create.mockResolvedValue(mockProject);
            const projectCreated = await createProject(mockProject.title, mockProject.short_description, mockProject.long_description);
            expect(projectCreated).toBe(mockProject);
            expect(prismaMock.project.create).toHaveBeenCalledTimes(1);
            expect(prismaMock.project.create).toHaveBeenCalledWith({ data: { title: mockProject.title, short_description: mockProject.short_description, long_description: mockProject.long_description } });
        })
    });

    describe('get all projects test', () => {
        test('it should get all projects', async () => {
            const mockProjects: project[] = [
                {
                    project_id: 1,
                    title: 'Hi',
                    short_description: 'NO',
                    long_description: 'YES',
                },
                {
                    project_id: 2,
                    title: 'Hello',
                    short_description: 'is it working',
                    long_description: 'Or not',
                },
                {
                    project_id: 3,
                    title: 'JO',
                    short_description: 'is it working',
                    long_description: 'Or not',
                },
            ];
            prismaMock.project.findMany.mockResolvedValue(mockProjects);
            const projects = await getAllProjects();
            expect(projects).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    project_id: 1,
                    title: 'Hi',
                    short_description: 'NO',
                    long_description: 'YES',
                }),
                expect.objectContaining({
                    project_id: 2,
                    title: 'Hello',
                    short_description: 'is it working',
                    long_description: 'Or not',
                }),
                expect.objectContaining({
                    project_id: 3,
                    title: 'JO',
                    short_description: 'is it working',
                    long_description: 'Or not',
                }),
            ]));
            expect(prismaMock.project.findMany).toHaveBeenCalledTimes(1);
            expect(projects.length).toBe(3);
        })
    });
});