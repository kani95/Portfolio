import { project } from '@prisma/client';
import prisma from "../prisma/client.js"; 

// !!! UNCOMMENT BELOW TO: npm test !!! 
//import prisma from "../prisma/client"; 

export const getAllProjects = async (): Promise<project[]> => {
    return prisma.project.findMany();
};

export const createProject = async (title: string, short_description: string, long_description: string): Promise<project> => {
    return prisma.project.create({
        data: {
            title,
            short_description,
            long_description,
        }
    });
};