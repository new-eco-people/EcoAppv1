using System;
using System.Net;
using Application.Interfaces.IServices;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Infrastructure.Implementation.Email
{
    public static class EmailFunctions
    {
        public static SendGridMessage GenerateMsg(string from, string fromName, string templateId, string emailAddress) {

            var msg = new SendGridMessage();

            msg.SetFrom(new EmailAddress(from, fromName));
            msg.AddTo(new EmailAddress(
                emailAddress
            ));

            msg.SetTemplateId(templateId);

            return msg;
        }

        public static VerifyEmailObject GenerateJsonVariables(EmailData verifyEmailData, string _hostname) {

            string token = WebUtility.UrlEncode(verifyEmailData.Token);
            string id = WebUtility.UrlEncode(verifyEmailData.User.Id.ToString());

            return new VerifyEmailObject() {
                FirstName = verifyEmailData.User.UserDetail.FirstName,
                Url = $"{_hostname}/public/verify-email?token={token}&userId={id}"
            };


        }
    }
}