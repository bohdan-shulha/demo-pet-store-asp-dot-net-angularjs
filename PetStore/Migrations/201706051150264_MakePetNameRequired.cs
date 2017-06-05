namespace PetStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MakePetNameRequired : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Pets", "Name", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Pets", "Name", c => c.String());
        }
    }
}
