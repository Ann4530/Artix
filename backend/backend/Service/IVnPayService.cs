using backend.Entities;
using backend.Entities.DTO;

namespace backend.Service
{
    public interface IVnPayService
    {
        string CreatePaymentUrl(OrderDetail model, HttpContext context);
        PaymentResponseModel PaymentExecute(IQueryCollection collections);
        OrderDetail GetPaymentModelFromCache(int ArtWorkID);
        string CreatePaymentUrlForPackage(Package package, HttpContext context);
    }
}
