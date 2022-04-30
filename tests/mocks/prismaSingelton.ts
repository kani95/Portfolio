import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, MockProxy } from "jest-mock-extended";
import prisma from "../../src/server/prisma/client.js";

jest.mock('../../src/server/prisma/client.js', () => ({
    _esModule: true,
    default: mockDeep<PrismaClient>(),
}));

const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>;

beforeEach(() => {
    mockReset(prismaMock);
});

export default prismaMock;