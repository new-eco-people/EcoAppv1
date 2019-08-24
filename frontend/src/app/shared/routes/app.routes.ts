
export class AppRoutes {

    static generateRoutes() {
        return {
            // Routes for public pages
    public: {
        path: `public`,
        name: `public`,

        // Home page of public site
        signIn: {
            name: 'signin',
            path: `public/signin`
        },

        // Signup route
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
        }
    },

    // Routes for public pages
    private: {
        path: `private`,
        name: `private`,

        // User profile page
        profile: {
            name: `profile`,
            path: `private/profile`,


            // Overview
            intro: {
                name: `intro`,
                path: `private/profile/intro`
            },

            // projects
            projects: {
                name: `projects`,
                path: `private/profile/projects`
            },

            // Communities
            communities: {
                name: `communities`,
                path: `private/profile/communities`
            }
        }

    },

    // Routes for admin pages
    admin: {
        path: `admin`,
        name: `admin`
    }
        }
    }

}
