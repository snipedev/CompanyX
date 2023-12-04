using firstApp.Models;
using Microsoft.EntityFrameworkCore;

namespace firstApp.Data;

public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
    {
        
    }
    public DbSet<Employee> Employees =>  Set<Employee>();
}