using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Extensions
{
    public class ProjectConfiguration : IEntityTypeConfiguration<Project>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Project> builder)
        {
            builder.Property(entity => entity.Title)
                .HasMaxLength(500)
                .IsRequired();
            
            builder.Property(entity => entity.Url)
                .HasMaxLength(500);

            builder.Property(entity => entity.Description)
                .HasMaxLength(2000);
        }
    }
}