using System.Text.RegularExpressions;

namespace Application.Infrastructure.Validations
{
    public static class CommonValidation
    {
        public static bool BeAValidPassword(string password) {
            var validator = new Regex("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_#£~|])[A-Za-z\\d@$!%*?&_#£~|]{5,}$");
            return validator.Match(password).Success;
        }

        public static string ValidPasswordErrorMessage = "Min 5 chars with one lowercase, uppercase, special char, number";
    }
}