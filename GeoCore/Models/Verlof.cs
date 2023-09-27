using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace  GeoCore.Models
{
    public class Verlof
    {
     [Key]
     public int? VerlofId { get; set; }
     public int? Status { get; set;}
     [ForeignKey("User")]
     public int? UserId { get; set; }
     public string? Reason { get; set; }
     public DateOnly? StartDate { get; set; }
     public DateOnly? EndDate { get; set; }
     public DateOnly? SubmitDate { get; set; }
     public DateOnly? ApprovalDate { get; set; }
     public string? Comment { get; set; }
    } 
}