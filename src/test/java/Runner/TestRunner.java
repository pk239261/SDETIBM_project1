package Runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
        features= "src/test/java/features/Calcluate.feature"
,glue= {"StepDefination"},
tags= {"@RegressionTest"},
plugin = { "pretty", "html:target/cucumber-pretty"}) 

public class TestRunner {

}
