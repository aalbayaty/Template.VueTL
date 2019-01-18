using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(Template.VueTL.Areas.Identity.IdentityHostingStartup))]

namespace Template.VueTL.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
            });
        }
    }
}