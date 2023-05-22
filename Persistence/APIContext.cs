using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Activity = Domain.Activity;

namespace Persistence;

public class APIContext : IdentityDbContext<ApplicationUser>
{
    public virtual DbSet<Activity> Activities { get; set; }
    public APIContext(DbContextOptions<Persistence.APIContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Customize the ASP.NET Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);
    }
}
