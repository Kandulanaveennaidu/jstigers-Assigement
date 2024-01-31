import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {

    session: {
        strategy: "jwt",
    },

    secret: process.env.JWT_SECRET_KEY,

    pages: {
        signIn: "/",
    },

    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),

        CredentialsProvider({
            async authorize(credentials, req) {

                const user = { name: 'User', email: 'test@gmail.com', image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' }

                const { email, password } = credentials;

                if (email !== user.email || password != 1234) {
                    throw new Error('Invalid credentials');
                }

                return user;
            },
        }),
    ],

}

export { authOptions }