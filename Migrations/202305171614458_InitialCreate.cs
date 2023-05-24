namespace Geoprofs.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                        Verlofsaldo = c.Double(nullable: false),
                        Rank = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Verlofs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CreatedDate = c.Int(nullable: false),
                        Reden = c.String(),
                        Status = c.Boolean(nullable: false),
                        Gebruiker_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Gebruiker_Id)
                .Index(t => t.Gebruiker_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Verlofs", "Gebruiker_Id", "dbo.Users");
            DropIndex("dbo.Verlofs", new[] { "Gebruiker_Id" });
            DropTable("dbo.Verlofs");
            DropTable("dbo.Users");
        }
    }
}
