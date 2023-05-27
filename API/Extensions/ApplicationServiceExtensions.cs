using Application.Activities;
using Application.Core;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Reflection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
                                                                IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("APIContextConnection") ??
                throw new InvalidOperationException("Connection string 'APIContextConnection' not found.");

            services.AddDbContext<APIContext>(options => options.UseSqlite(connectionString));

            services
                .AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<APIContext>();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddCors(
                opt =>
                {
                    opt.AddPolicy(
                        nameof(API),
                        policy =>
                        {
                            policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                        });
                });
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Query).GetTypeInfo().Assembly));
            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            return services;
        }
    }
}
