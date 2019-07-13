using System;
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
    }
}