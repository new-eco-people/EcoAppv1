using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Interfaces.IServices;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Infrastructure.Implementation.Email
{
    public class EmailService : IEmailService
    {
        public string VerifyEmailTemplateId = "d-ba9d004d434d49bfa5f7b137210c548e";

        public async Task SendAsync(UserCreated UserCreatedDetails)
        {
            await WriteToFile(UserCreatedDetails.SignUpResult.User.Email);
        }



        public async Task SendVerifyEmailAsync(VerifyEmailData verifyEmailData)
        {
            var hostname = Environment.GetEnvironmentVariable("HOSTNAME");
            var client = new SendGridClient(Environment.GetEnvironmentVariable("SENDGRID_API"));

            var msg = new SendGridMessage();

            msg.SetFrom(new EmailAddress("info@newecopeople.com", "Eco Team"));
            msg.AddTo(new EmailAddress(
                verifyEmailData.User.Email
            ));

            msg.SetTemplateId(VerifyEmailTemplateId);
            string token = WebUtility.UrlEncode(verifyEmailData.Token);
            string id = WebUtility.UrlEncode(verifyEmailData.User.Id.ToString());
            
            var data = new VerifyEmailObject() {
                FirstName = verifyEmailData.User.UserDetail.FirstName,
                Url = $"{hostname}/verify-email/?token={token}&id={id}"
            };


            msg.SetTemplateData(data);
            // var msgv1 = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var msgv1 = MailHelper.CreateSingleTemplateEmail(
                new EmailAddress("noreply@newecopeople.com", "Eco Team"),
                new EmailAddress(verifyEmailData.User.Email),
                VerifyEmailTemplateId,
                data
            );

            var response = await client.SendEmailAsync(msg);

            await WriteToFile(token);
        }



        public async Task WriteToFile(string data) {
            using (var writer = new StreamWriter(Path.GetFullPath("emailmessage.txt"), append: false))
            {
                await writer.WriteLineAsync(data);
            }
        }



    }
}


