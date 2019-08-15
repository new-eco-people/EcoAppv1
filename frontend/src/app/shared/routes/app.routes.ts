
export const AppRoutes = {

    // Routes for public pages
    public: {

        // Home page of public site
        default: 'public',

        // Signin route
         signIn: {
            name: 'signin',
            path: `public/signin`
        },

        // Signup route
        // get signUp() { return `${this.default}/signup`},
        signUp: {
            name: 'signup',
            path: `public/signup`
        },

        // Verify email route
        verifyEmail: {
            name: 'verify-email',
            path: `public/verify-email`
        },

        // forgot password route
        forgotPassword: {
            name: 'forgot-password',
            path: `public/forgot-password`
        },

        // reset password route
        resetPassword: {
                name: 'reset-password',
                path: `public/reset-password`
        },

        // Send email verification
        sendEmailVerification: {
                name: 'send-email-verification',
                path: `public/send-email-verification`
        },
    },

    private : {

        //  Home page for private users
        default: 'private',

        // User profile page
        profile: {
            default: 'profile',
            path: 'private/profile',


            intro : {
                default: 'intro',
                path: 'private/profile/intro'
            }
        }

    },

    admin : {
        // Home page for admin
        default: 'admin'
    }

}
