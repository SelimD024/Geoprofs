using GeoCore.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// Add Database connection
builder.Services.AddDbContextPool<GeoContext>(options => options
    .UseMySql(builder.Configuration.GetConnectionString("GeoConnection"), new MySqlServerVersion(new Version(10, 4, 28)))); // replace with your Server Version

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173") 
                .AllowAnyHeader()
                .AllowAnyMethod();
        });

});


// Build application
var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors("AllowClient");

app.UseAuthorization();

// Onze routes ( ga naar de /routes folder)
RouteConfig.SetRoutes(app);

app.Run();