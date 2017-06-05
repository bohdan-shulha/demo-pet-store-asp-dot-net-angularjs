using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace PetStore
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //    "~/Scripts/jquery-{version}.js"));

            // bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //     "~/Scripts/jquery.unobtrusive*",
            //     "~/Scripts/jquery.validate*"));

            // bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
            //     "~/Scripts/knockout-{version}.js",
            //     "~/Scripts/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/vendor-scripts").Include(
                "~/Scripts/modernizr-{version}.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-resource.js",
                "~/Scripts/angular-ui/ui-bootstrap.js",
                "~/Scripts/angular-ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app/core/resources/resources.module.js",
                "~/Scripts/app/core/resources/owners.factory.js",
                "~/Scripts/app/core/resources/pets.factory.js",

                "~/Scripts/app/core/core.module.js",

                "~/Scripts/app/screens/owners/owners.module.js",
                "~/Scripts/app/screens/owners/new_owner_form.component.js",
                "~/Scripts/app/screens/owners/owner_list.component.js",
                "~/Scripts/app/screens/owners/owners.component.js",

                "~/Scripts/app/screens/pets/pets.module.js",
                "~/Scripts/app/screens/pets/new_pet_form.component.js",
                "~/Scripts/app/screens/pets/pets.component.js",

                "~/Scripts/app/screens/screens.module.js",

                "~/Scripts/app/app.module.js"));

            bundles.Add(new StyleBundle("~/bundles/vendor-styles").Include(
                "~/Content/bootstrap.css",
                "~/Content/ui-bootstrap-csp.css"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            // bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //     "~/Scripts/modernizr-*"));

            // bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //     "~/Scripts/bootstrap.js",
            //     "~/Scripts/respond.js"));

            // bundles.Add(new StyleBundle("~/Content/css").Include(
            //      "~/Content/bootstrap.css",
            //      "~/Content/Site.css"));
        }
    }
}
