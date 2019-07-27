namespace Application.Interfaces.IServices
{
    public interface ICaptchaService
    {
        bool Ishuman(string Id, string Code);
    }
}