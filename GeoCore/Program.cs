using GeoCore.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// ↓ Add the following lines: ↓
builder.Services.AddSpaStaticFiles(configuration => {
    configuration.RootPath = "clientapp/dist";
});
// ↑ these lines ↑

var app = builder.Build();

// Add Database connection

builder.Services.AddDbContextPool<GeoContext>(options => options
    .UseMySql(builder.Configuration.GetConnectionString("GeoConnection"), new MySqlServerVersion(new Version(10, 4, 28)))); // replace with your Server Version

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173") // replace with your React app's origin
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}



app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

RouteConfig.SetRoutes(app);

app.Run();