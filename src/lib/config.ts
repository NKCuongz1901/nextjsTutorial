import { z } from "zod";

const configSchema = z.object({
    NEXT_PUBLIC_URL_BACKEND: z.string(),
});
const configProject = configSchema.safeParse({
    NEXT_PUBLIC_URL_BACKEND: process.env.NEXT_PUBLIC_URL_BACKEND
});

if (!configProject.success) {
    console.error(configProject.error.issues);
    throw new Error('NEXT_PUBLIC_URL_BACKEND is not defined');
}

const envConfig = configProject.data;
export default envConfig;