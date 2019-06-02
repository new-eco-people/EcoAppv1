using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.EntityConfigurations
{
    public class ProblemConfiguration : IEntityTypeConfiguration<Problem>
    {
        public void Configure(EntityTypeBuilder<Problem> builder)
        {
            // builder.HasOne(entity => entity.Country);

            // builder.HasOne(entity => entity.State);
            builder.Property(x => x.Description)
                .HasMaxLength(2000)
                .IsRequired();

            // Relationship

            // Problem 1 <-> * Projects
            builder.HasMany(entity => entity.Projects)
                .WithOne(entity => entity.Problem)
                .OnDelete(DeleteBehavior.ClientSetNull);

            // Problem 1 <-> * Photos
            builder.HasMany(entity => entity.Photos)
                .WithOne(entity => entity.Problem)
                .OnDelete(DeleteBehavior.Cascade);

            // Problem 1 <-> * Votes
            builder.HasMany(entity => entity.Votes)
                .WithOne(entity => entity.Problem)
                .OnDelete(DeleteBehavior.Cascade);
            
            // Problem 1 <-> * Ideas
            builder.HasMany(entity => entity.Ideas)
                .WithOne(entity => entity.Problem)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}