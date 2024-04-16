import {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from "../../hooks/hooks";
//import { Env } from "../../config/env";
import SiteAdministrationPage from "../../tests/pages/siteAdministrationPage";
import SiteNavigation from "../pages/siteNavigation";
import AddCoursePage from "../pages/addCoursePage";

Given("I am on the Site Adminstration page", async function () {
  const page = getPage(); // Use getPage() to get the current page
  const siteNavigation = new SiteNavigation(getPage());
  await siteNavigation.navigateToSiteAdministrationPage();

  // await getPage().waitForTimeout(1000);
});
When("I navigate to Course link", async () => {
  const siteAdministrationPage = new SiteAdministrationPage(getPage());
  await siteAdministrationPage.navigateToCoursesTab();
});
Then("I should be able to add a course", async function () {
  const addCoursePage = new AddCoursePage(getPage(), this.log);
  await addCoursePage.fillAddNewCourseForm(
    "Geometry",
    "Geo",
    "Geo07",
    "Advanced Level Geoetry course"
  );
  await getPage().waitForTimeout(1000);
});
