import { cleanEnv, str, port } from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        MONGO_PASSWORD: str(),
        MONGO_USER: str(),
        MONGO_PATH: str(),
        PORT: port({ default: 3000 }),
        JWT_SECRET: str(),
    });
}

export default validateEnv;
