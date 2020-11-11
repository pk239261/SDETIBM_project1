Feature:  Calcluate BMI
  I have to calculate BMI for 5 different users

  @RegressionTest
  Scenario Outline: BMI calculate for 5 users
    Given User is on the Calulator page
    When User clicks on BMI calculator
    Then User enters "<Age>", "<Height>" and "<Weight>"
    Then User click on Calcluate BMI
    Then Close the browser

    Examples: 
      | Age | Height | Weight |
      | 10|12 |40|
      | 30|156|70|
      | 25|152|55|
      | 20|160|45|
      | 35|160|70|