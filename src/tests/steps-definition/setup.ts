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
import LoginPage from "../pages/loginPage"; // Import your page object
import AddUserPage from "../pages/addUserPage";
import { Env } from "../../config/env";
import SiteNavigation from "../pages/siteNavigation";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();

const username = Env.ADMIN_USER1;
const password = Env.ADMIN_USER1_PASSWORD;
const URL = Env.APP_URL;

Given("As a User, I navigate to the moodle login webpage", async function () {
  const loginPage = new LoginPage(getPage(), this.log);
  await loginPage.navigateToLoginPage(URL); //Going to the BASE URL has now been moved to the before Hooks
  //this.log(">>>>> Test Started")

  this.log(`>>>>Test Execution Started at:  ${new Date().toLocaleString()}`);
});
When("I enter my credentials", async function () {
  const loginPage = new LoginPage(getPage(), this.log);
  // Check if the "Logout" button exists
  const logoutButton = await getPage().getByRole("button", { name: "Log out" });
  if (logoutButton) {
    console.log(">>>>>>Logout button found, clicking to log out...");
    await logoutButton.click();
  } else {
    console.log(">>>>>>>Logout button not found, proceeding with login...");
  }
  // Proceed to log in
  await loginPage.adminLogin(username, password);

  // Save storage state after logging in
  await getPage()
    .context()
    .storageState({ path: "src/helper/auth/admin_auth.json" });
});

Then("I should be logged in", async function () {
  const loginPage = new LoginPage(getPage(), this.log);
  await loginPage.loggInUserVerification(Env.ADMIN_USER1);
  const pagetitle = await loginPage.getPageTitle();
  await expect(pagetitle).toEqual("Dashboard | Taribo-Elixir");
  this.log(`>>>>>>>>>page title is :",${pagetitle} `);

  // const text = node.textContent;
});
Then("I can log out successfully", async function () {
  const loginPage = new LoginPage(getPage(), this.log);
  await loginPage.logout();
  //this.log(">>>>> Test Ended");
  this.log(`>>>>Test Execution Ended at:  ${new Date().toLocaleString()}`);
  await getPage().close();
  await getPage().close();
});
