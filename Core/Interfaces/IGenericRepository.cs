using Core.Entities;

namespace Core.Interfaces;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<T?> GetByIdAsync(int id);
    
    Task<T?> GetEntityWithSpecAsync(ISpecification<T> spec);
    
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    
    Task<IReadOnlyList<T>> ListAllAsync();
    
    Task<TResult?> GetEntityWithSpecAsync<TResult>(ISpecification<T, TResult> spec);
    
    Task<IReadOnlyList<TResult>> ListAsync<TResult>(ISpecification<T, TResult> spec);
    
    void Add(T entity);
    
    void Update(T entity);
    
    void Remove(T entity);
    
    bool Exists(int id);
    
    Task<int> CountAsync(ISpecification<T> spec);
}