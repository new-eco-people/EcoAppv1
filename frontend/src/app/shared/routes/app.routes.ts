
export const AppRoutes = {

    // Routes for public pages
    public: {

        // Home page of public site
        default: 'public',

        // Signin route
        get signIn() {
            return {
                name: 'signin',
                fullPath: `${this.default}/signin`
            }
        },

        // Signup route
        // get signUp() { return `${this.default}/signup`},
        get signUp() {
            return {
                name: 'signup',
                fullPath: `${this.default}/signup`
            }
        },

        // Verify email route
        get verifyEmail() {
            return {
                name: 'verify-email',
                fullPath: `${this.default}/verify-email`
            }
        },

        // forgot password route
        get forgotPassword() {
            return {
                name: 'forgot-password',
                fullPath: `${this.default}/forgot-password`
            }
        },

        // reset password route
        get resetPassword() {
            return {
                name: 'reset-password',
                fullPath: `${this.default}/reset-password`
            }
        },

        // Send email verification
        get sendEmailVerification() {
            return {
                name: 'send-email-verification',
                fullPath: `${this.default}/send-email-verification`
            }
        },
    },

    private : {

        //  Home page for private users
        default: 'private',

        // User profile page
        get profile() {
            return {
                name: 'profile',
                fullPath: `${this.default}/profile`
            }
        },

    }

}
