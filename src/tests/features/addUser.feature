Feature: User management   

@AddUsers	
Scenario: Admin adds new user
	Given I navigate to site administration page link 
    When I click on the Add New User link
	Then I should be able to add a new user   









# # @AddUsers	
# # Scenario: Admin creates account for new user
# # 	Given  I navigate to site administration page link 
# # 	And    I click on the users panel 
# # 	And    I follow accounts and click on add a new user 
# # 	And    I enter "<username>","<password>","<firstname>","<surname>","<emailaddress>","<city/town>" 
# # 	When   I click on the create button 
# # 	Then   A new user account is created 
# # # 	Examples: 
# # # 		|username|password|firstname|surname|emailaddress|city/town|
# # # 		|user1| user1pwd|user |1|user1@example.com|MK|