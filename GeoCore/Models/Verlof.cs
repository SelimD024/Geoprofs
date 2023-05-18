namespace Geoprofs.Models
{
    public class Verlof
    {
        public int? Id { get; set; }
        public int? CreatedDate { get; set; }
        public string? Reden { get; set; }
        public bool? Status { get; set; }
        public User? Gebruiker { get; set; }
    }
}