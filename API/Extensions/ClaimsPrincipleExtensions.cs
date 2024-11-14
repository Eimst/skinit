using System.Security.Authentication;
using System.Security.Claims;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ClaimsPrincipleExtensions
{
    public static async Task<AppUser> GetUserByEmailAsync(this UserManager<AppUser> userManager,
        ClaimsPrincipal user)
    {
        var userToReturn = await userManager.Users.FirstOrDefaultAsync(x => x.Email == user.GetEmail());
        
        return userToReturn ?? throw new AuthenticationException();
    }
    
    public static async Task<AppUser> GetUserByEmailWithAddressAsync(this UserManager<AppUser> userManager,
        ClaimsPrincipal user)
    {
        var userToReturn = await userManager.Users
            .Include(x => x.Address)
            .FirstOrDefaultAsync(x => x.Email == user.GetEmail());
        
        return userToReturn ?? throw new AuthenticationException();
    }
    
    public static string GetEmail(this ClaimsPrincipal user)
    {
        var email = user.FindFirstValue(ClaimTypes.Email) ??
                    throw new AuthenticationException("Email is not found");

        return email;
    }
}