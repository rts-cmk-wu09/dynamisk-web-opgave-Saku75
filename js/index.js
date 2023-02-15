import heroSection from "./modules/hero.js";
import servicesSection from "./modules/services.js";
import facilitiesSection from "./modules/facilities.js";
import sitesSection from "./modules/sites.js";
import advantagesSection from "./modules/advantages.js";
import footerSection from "./modules/footer.js";

document.addEventListener("DOMContentLoaded", function () {
	heroSection(hero);
	servicesSection(services);
	facilitiesSection(facilities);
	sitesSection(sites);
	advantagesSection(advantages);
	footerSection(footer);
}); // DOMContentLoaded slut
