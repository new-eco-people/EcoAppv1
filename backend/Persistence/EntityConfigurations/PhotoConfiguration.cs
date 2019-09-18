using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.EntityConfigurations
{
    public class PhotoConfiguration : IEntityTypeConfiguration<Photo>
    {
        public void Configure(EntityTypeBuilder<Photo> builder)
        {
            builder.Property(entity => entity.Url)
                .HasMaxLength(500);

            builder.Property(entity => entity.Description)
                .HasMaxLength(2000);

            builder.Property(entity => entity.PublicId)
                .HasMaxLength(500);
        }
    }
}