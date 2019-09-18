using Application.Interfaces.IServices;
using BotDetect.Web; 

namespace Api.Infrastructure.Captcha
{
    public class CaptchaService : ICaptchaService
    {
        public bool Ishuman(string Id, string Code)
        {
            if (string.IsNullOrEmpty(Id))
                return false;

                
            // create a captcha instance to be used for the captcha validation 
            SimpleCaptcha simpleCaptcha = new SimpleCaptcha();
            return simpleCaptcha.Validate(Code, Id);
            // return false;
        }
    }
}