using firstApp.Data;
using firstApp.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDBContext>(opt => opt.UseSqlite("Data Source = FirstApi.db"));
builder.Services.AddCors(opt => opt.AddPolicy(name: MyAllowSpecificOrigins, policy => { policy.WithOrigins("http://localhost:3000", "http://localhost:3001"); }));
//builder.Services.AddDbContext<AppDbContext>(opt => opt.UseSqlite("Data Source = MessageBroker.db"));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(MyAllowSpecificOrigins);

//Emplopyee endpoints

#region employee endpoints

app.MapGet("api/employees", async (AppDBContext context) =>
{
    var employees = await context.Employees.ToListAsync();
    return Results.Ok(employees);
});

app.MapGet("api/employee/{id}", async (AppDBContext context, int id) =>
{
    var employees = await context.Employees.FirstOrDefaultAsync(x => x.Id == id);
    return Results.Ok(employees);
});

app.MapPost("api/employees", async (AppDBContext context, Employee employee) =>
{
    await context.Employees.AddAsync(employee);
    await context.SaveChangesAsync();
    return Results.Created($"api/employee/{employee.Id}", employee);
});



#endregion

app.Run();
