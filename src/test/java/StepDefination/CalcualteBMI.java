package StepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CalcualteBMI {
    WebDriver  driver ;
    
    @Given("^User is on the Calulator page$")
    public void user_is_on_the_Calulator_page() throws Throwable {
        
        System.setProperty("webdriver.gecko.driver","C:/Users/ParasKhetwani/Documents/geckoDriver_random/geckodriver.exe");
        driver = new FirefoxDriver();
        driver.get("https://www.calculator.net/");
        
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        String parentTitle = driver.getTitle() ;
        
        if (parentTitle.contains("Calculator.net: Free Online Calculators")) {
            
            System.out.println("Parent title is verified");
            
        } else {
            
            System.out.println("Parent title is not matched"); 
        }
    }

    @When("^User clicks on BMI calculator$")
    public void user_clicks_on_BMI_calculator() throws Throwable {
        
        driver.findElement(By.xpath("//a[text()='BMI Calculator']")).click();
        
        String childTitle = driver.getTitle() ;
  
         if (childTitle.contains("BMI Calculator")) {
            
            System.out.println("Child title is verified");
            
        } else {
            
            System.out.println("Child title is not matched"); 
        }
    }

    @Then("^User enters \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String Age, String Height, String Weight) throws Throwable {
        
        WebElement age =  driver.findElement(By.xpath("//*[text()='Age']//..//input[@type='text']"));
        age.clear();
        age.sendKeys(Age);
        
       
        WebElement height = driver.findElement(By.xpath("(//*[text()='Height'])[2]//following-sibling::td//input")) ;
        height.clear();
        height.sendKeys(Height);
        
        WebElement wieght = driver.findElement(By.xpath("(//*[text()='Weight'])[2]//following-sibling::td//input")) ;
        wieght.clear();
        wieght.sendKeys(Weight);
        
    }

    @Then("^User click on Calcluate BMI$")
    public void user_click_on_Calcluate_BMI() throws Throwable {
        
     driver.findElement(By.xpath("//input[@type='image']")).click();
        
     System.out.println("Calculate BMI=  "+ driver.findElement(By.xpath("//b[contains(text(),'BMI = ')]")).getText());
       
    }
    
    @Then("^Close the browser$")
    public void close_the_browser() throws Throwable {
        
        driver.close();
        
    }

}
