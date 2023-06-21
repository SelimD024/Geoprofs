namespace  GeoCore.Models
{
    public class Verlof
    {
        public int? Id { get; set; }
        // public string VerlofTypeID { get; set; }
        public DateOnly? StartDate { get; set; }
        public DateOnly? EndDate { get; set; }
        public string? Reden { get; set; }
        public bool? Status { get; set; }

    } 
}