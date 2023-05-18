namespace Geoprofs.Models
{
    public class User
    {
        public int? Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public double? Verlofsaldo { get; set; }
        public int? Rank { get; set; }
    }
}