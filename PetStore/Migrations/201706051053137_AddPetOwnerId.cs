namespace PetStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPetOwnerId : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Pets", name: "Owner_Id", newName: "OwnerID");
            RenameIndex(table: "dbo.Pets", name: "IX_Owner_Id", newName: "IX_OwnerID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Pets", name: "IX_OwnerID", newName: "IX_Owner_Id");
            RenameColumn(table: "dbo.Pets", name: "OwnerID", newName: "Owner_Id");
        }
    }
}
