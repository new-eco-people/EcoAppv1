using System;
using Domain.Entities;
using Domain.Entities.CoreEntities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repository
{
        public class DefaultDataContext : IdentityDbContext<User, Role, Guid,
        IdentityUserClaim<Guid>, UserRole, IdentityUserLogin<Guid>,
        IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>
    {

        // Entities to add to the database
        public DbSet<UserDetail> UserDetails { get; set; }
        // public DbSet<OrganizationDetail> OrganizationDetails { get; set; }
        public DbSet<Idea> Ideas { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Problem> Problems { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<EcoEntity> EcoEntities { get; set; }
        public DbSet<Ico> Icos { get; set; }
        public DbSet<UnSDGGoal> UnSDGGoals { get; set; }
        public DefaultDataContext(DbContextOptions<DefaultDataContext> options)
        : base(options) {}
// 
        protected override void OnModelCreating(ModelBuilder builder) {

            builder.Entity<UserRole>(userRole =>{
                userRole.HasKey(ur => new {ur.UserId, ur.RoleId});

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            builder.ApplyConfigurationsFromAssembly(typeof(DefaultDataContext).Assembly);

            base.OnModelCreating(builder);
        }

    }
}