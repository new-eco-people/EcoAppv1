using System.Text.RegularExpressions;

namespace Application.Infrastructure.Validations
{
    public static class CommonValidation
    {
        public static bool BeAValidPassword(string password) {
            var validator = new Regex("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{5,}$");
            return validator.Match(password).Success;
        }
    }
}