using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Template.Models
{

    //Not sure where to put this class, So I just added it to Models directory. 
    public class SiteSettings
    {
        public bool AllowRegistration { get; set; }
        public bool NavigationRequiresLogin { get; set; }
        public AdminsSettings Admin { get; set; }
    }

    public class AdminsSettings
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
