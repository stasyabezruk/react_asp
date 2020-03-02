using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(React_Net.Startup))]
namespace React_Net
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
