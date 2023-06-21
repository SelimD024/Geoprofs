using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GeoCore.Migrations
{
    public partial class VerlofModelUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Verloven_Users_GebruikerId",
                table: "Verloven");

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartDate",
                table: "Verloven",
                type: "datetime(6)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Verloven",
                keyColumn: "Reden",
                keyValue: null,
                column: "Reden",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Reden",
                table: "Verloven",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "GebruikerId",
                table: "Verloven",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndDate",
                table: "Verloven",
                type: "datetime(6)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Verloven_Users_GebruikerId",
                table: "Verloven",
                column: "GebruikerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Verloven_Users_GebruikerId",
                table: "Verloven");

            migrationBuilder.AlterColumn<int>(
                name: "StartDate",
                table: "Verloven",
                type: "int",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Reden",
                table: "Verloven",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "GebruikerId",
                table: "Verloven",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "EndDate",
                table: "Verloven",
                type: "int",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Verloven_Users_GebruikerId",
                table: "Verloven",
                column: "GebruikerId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
