// setup.ts

import { Page,expect } from "@playwright/test";
import LoginPage from "../../tests/pages/loginPage";
import AddUserPage from "../../tests/pages/addUserPage";
import AddCoursePage from "../../tests/pages/addCoursePage";
import SiteAdministrationPage from "../../tests/pages/siteAdministrationPage";
import SiteNavigation from "../../tests/pages/siteNavigation";
import { getPage } from "../../hooks/hooks";

const page = getPage();
export const loginPage = new LoginPage(getPage());
export const addUserPage = new AddUserPage(getPage());
export const addCoursePage = new AddCoursePage(getPage());
export const siteAdministrationPage = new SiteAdministrationPage(getPage());
export const siteNavigation = new SiteNavigation(getPage());
