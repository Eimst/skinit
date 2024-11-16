namespace Core.Interfaces;

public interface IResponseCacheService
{
    Task CacheResponseAsync(string key, object response, TimeSpan timeToLive);
    
    Task<string?> GetCachedResponseAsync(string key);
    
    Task RemoveCacheByPattern(string pattern);
}