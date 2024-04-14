//import { test as baseTest } from '@playwright/test';
import { test as baseTest } from "@playwright/test";
import LoginPage from '../../tests/pages/loginPage';
import  AddCoursePage  from "../../tests/pages/addCoursePage";
import  AddUserPage  from "../../tests/pages/addUserPage";
import SiteNavigation  from "../../tests/pages/siteNavigation";
import SiteAdministrationPage  from "../../tests/pages/siteAdministrationPage";

type pages = {
  loginPage: LoginPage;
  //homePage: HomePage;
  addUserPage: AddUserPage;
  addCoursePage: AddCoursePage;
  siteAdministrationPage: SiteAdministrationPage;
  siteNavigation: SiteNavigation;
};

const testPages = baseTest.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  addCoursePage: async ({ page }, use) => {
    await use(new AddCoursePage(page));
  },
  addUserPage: async ({ page }, use) => {
    await use(new AddUserPage(page));
  },

  siteNavigation: async ({ page }, use) => {
    await use(new SiteNavigation(page));
  },
  siteAdministrationPage: async ({ page }, use) => {
    await use(new SiteAdministrationPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;