using API.Extensions;
using Application.Activities;
using Application.Core;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Reflection;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
 
            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddApplicationServices(builder.Configuration);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if(app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            #if DEBUG
            #endif
            app.UseHttpsRedirection();

            app.UseCors(nameof(API));

            app.UseAuthorization();

            app.MapControllers();

            await MigrateDBAsync(app);

            app.Run();

        }

        static async Task MigrateDBAsync(global::Microsoft.AspNetCore.Builder.WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var services = scope.ServiceProvider;

            try
            {
                var ctx = services.GetRequiredService<APIContext>();

                ctx.Database.Migrate();
                await Seed.SeedData(ctx);
            } catch(Exception e)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(e, "An error occured during migration");
                throw;
            }
        }
    }
}