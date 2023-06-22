using GeoCore.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
builder.Services.AddControllersWithViews();



// Add Database connection

builder.Services.AddDbContextPool<GeoContext>(options => options
    .UseMySql(builder.Configuration.GetConnectionString("GeoConnection"), new MySqlServerVersion(new Version(10, 4, 28)))); // replace with your Server Version

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173") // replace with your React app's origin
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

RouteConfig.SetRoutes(app);

app.Run();