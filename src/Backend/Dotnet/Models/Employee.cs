using System.ComponentModel.DataAnnotations;

namespace firstApp.Models;

public class Employee
{
    [Key]
    public int? Id { get; set; }
    [Required]
    public string? Name { get; init; }
    [Required]
    public string? Address { get; set; }
    public string? Gender { get; set; }
    [Required]
    public string? Email { get; set; }
    public string?  Username { get; set; }
    public string? Company { get; set; }
}