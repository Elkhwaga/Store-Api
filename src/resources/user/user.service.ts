import userModel from '@/resources/user/user.model';
import { verifyToken, createToken } from '@/utils/token';

class UserServices {
    private user = userModel;

    /**
     * Register a new user
     */
    public async register(
        name: string,
        email: string,
        password: string,
        role: string,
    ): Promise<Error | string> {
        try {
            const user = await this.user.create({
                name,
                email,
                password,
                role,
            });
            const accessToken = createToken(user);
            return accessToken;
        } catch (error: any) {
            throw new Error('Unable to create user');
        }
    }

    /**
     * Attempt to login a user
     */
    public async login(
        email: string,
        password: string,
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({ email });

            if (!user)
                throw new Error('Unable to find user with email address');

            if (await user.isValidPassword(password)) return createToken(user);
            else throw new Error('Wrong credentials given');
        } catch (error: any) {
            throw new Error('Unable is login user');
        }
    }
}

export default UserServices;
