import { Page, Locator } from "@playwright/test";
import { getPage } from "../../hooks/hooks";
import BasePage from "../pages/basePage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager/index.js";

export default class AddUserPage extends BasePage {
  protected readonly addNewUserLink: Locator;
  protected readonly usernameField: Locator;
  protected readonly newPasswordField: Locator;
  protected readonly firstNameField: Locator;
  protected readonly lastNameField: Locator;
  protected readonly emailAddressField: Locator;
  protected readonly moodleNetProfileIDField: Locator;
  protected readonly cityTownField: Locator;
  protected readonly countrySelect: Locator;
  protected readonly pictureDescriptionField: Locator;
  protected readonly createUserButton: Locator;

  constructor(page: Page,log:ICreateLog) {
    super(page,log);

    this.addNewUserLink = page.getByRole("link", { name: "Add a new user" });
    this.usernameField = page.getByLabel("Username", { exact: true });
    this.newPasswordField = page.getByRole("link", {
      name: "Click to enter text Edit",
    });
    this.firstNameField = page.getByLabel("First name", { exact: true });
    this.lastNameField = page.getByLabel("Last name", { exact: true });
    this.emailAddressField = page.getByLabel("Email address");
    this.moodleNetProfileIDField = page.getByLabel("MoodleNet profile ID", {
      exact: true,
    });
    this.cityTownField = page.getByLabel("City/town");
    this.countrySelect = page.getByLabel("Select a country");
    this.pictureDescriptionField = page.getByLabel("Picture description");
    this.createUserButton = page.getByRole("button", { name: "Create user" });
  }

  async clickAddNewUserLink(): Promise<void> {
    await this.addNewUserLink.click();
  }

  async fillUsernameField(value: string): Promise<void> {
    await this.usernameField.fill(value);
  }

  async fillNewPasswordField(value: any) {
    await this.newPasswordField.pressSequentially(value);
  }
  async fillFirstNameField(value: string): Promise<void> {
    await this.firstNameField.fill(value);
  }

  async fillLastNameField(value: string): Promise<void> {
    await this.lastNameField.fill(value);
  }

  async fillEmailAddressField(value: string): Promise<void> {
    await this.emailAddressField.fill(value);
  }

  async fillMoodleNetProfileIDField(value: string): Promise<void> {
    await this.moodleNetProfileIDField.fill(value);
  }

  async fillCityTownField(value: string): Promise<void> {
    await this.cityTownField.fill(value);
  }

  async selectCountryOption(value: string): Promise<void> {
    await this.countrySelect.selectOption(value);
  }

  async fillPictureDescriptionField(value: string): Promise<void> {
    await this.pictureDescriptionField.fill(value);
  }

  async clickCreateUserButton(): Promise<void> {
    await this.createUserButton.click();
  }

  async fillAddUserForm(
    username: any,
    password: any,
    firstname: any,
    lastname: any,
    email: any,
    modid: any,
    city: any,
    country: any,
    picdesc: any
  ) {
    //await this.clickAddNewUserLink();
    await this.usernameField.fill(username);
    await getPage().waitForTimeout(500);
    await getPage()
      .getByRole("link", { name: "Click to enter text Edit" })
      .click();
    await getPage().getByLabel("New password", { exact: true }).fill(password);
    //await this.fillNewPasswordField(password);
    await this.fillFirstNameField(firstname);
    await this.fillLastNameField(lastname);
    await this.fillEmailAddressField(email);
    await this.fillMoodleNetProfileIDField(modid);
    await this.fillCityTownField(city);
    await this.selectCountryOption(country);
    await this.fillPictureDescriptionField(picdesc);
    await this.clickCreateUserButton();
  }
}
