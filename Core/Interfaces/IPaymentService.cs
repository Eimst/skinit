using Core.Entities;

namespace Core.Interfaces;

public interface IPaymentService
{
    Task<ShoppingCart?> CreateOrUpdatePaymentsIntent(string cartId);
    
    Task<string> RefundPayment(string paymentIntentId);
}