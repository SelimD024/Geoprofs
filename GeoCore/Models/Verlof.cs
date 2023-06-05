namespace  GeoCore.Models
{
    public class Verlof
    {
        public int? Id { get; set; }
        public string VerlofTypeID { get; set; }
        public int? StartDate { get; set; }
        public int? EndDate { get; set; }

        public string? Reden { get; set; }
        public bool? Status { get; set; }
        public User? Gebruiker { get; set; }

    } 
}