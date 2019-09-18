using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.EntityConfigurations
{
    public class IdeaConfiguration : IEntityTypeConfiguration<Idea>
    {
        public void Configure(EntityTypeBuilder<Idea> builder)
        {
            builder.Property(entity => entity.Message)
                .HasMaxLength(2000)
                .IsRequired();
        }
    }
}