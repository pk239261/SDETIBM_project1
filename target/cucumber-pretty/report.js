$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Calcluate.feature");
formatter.feature({
  "line": 1,
  "name": "Calcluate BMI",
  "description": "I have to calculate BMI for 5 different users",
  "id": "calcluate-bmi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cAge\u003e\", \"\u003cHeight\u003e\" and \"\u003cWeight\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 13,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;1"
    },
    {
      "cells": [
        "10",
        "12",
        "40"
      ],
      "line": 14,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 15,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 16,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 17,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 18,
      "id": "calcluate-bmi;bmi-calculate-for-5-users;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"10\", \"12\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcualteBMI.user_is_on_the_Calulator_page()"
});
formatter.result({
  "duration": 9183258000,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_clicks_on_BMI_calculator()"
});
formatter.result({
  "duration": 1786220000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "40",
      "offset": 28
    }
  ],
  "location": "CalcualteBMI.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 270623400,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_click_on_Calcluate_BMI()"
});
formatter.result({
  "duration": 922271700,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.close_the_browser()"
});
formatter.result({
  "duration": 1236575600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"30\", \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcualteBMI.user_is_on_the_Calulator_page()"
});
formatter.result({
  "duration": 7203197000,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_clicks_on_BMI_calculator()"
});
formatter.result({
  "duration": 1681403700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 13
    },
    {
      "val": "156",
      "offset": 19
    },
    {
      "val": "70",
      "offset": 29
    }
  ],
  "location": "CalcualteBMI.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 512291000,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_click_on_Calcluate_BMI()"
});
formatter.result({
  "duration": 962527500,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.close_the_browser()"
});
formatter.result({
  "duration": 1240712200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"25\", \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcualteBMI.user_is_on_the_Calulator_page()"
});
formatter.result({
  "duration": 7095277400,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_clicks_on_BMI_calculator()"
});
formatter.result({
  "duration": 1841350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    },
    {
      "val": "152",
      "offset": 19
    },
    {
      "val": "55",
      "offset": 29
    }
  ],
  "location": "CalcualteBMI.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 350862300,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_click_on_Calcluate_BMI()"
});
formatter.result({
  "duration": 1027351600,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.close_the_browser()"
});
formatter.result({
  "duration": 1180199200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"20\", \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcualteBMI.user_is_on_the_Calulator_page()"
});
formatter.result({
  "duration": 7066101300,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_clicks_on_BMI_calculator()"
});
formatter.result({
  "duration": 1647078300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 19
    },
    {
      "val": "45",
      "offset": 29
    }
  ],
  "location": "CalcualteBMI.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 370333300,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_click_on_Calcluate_BMI()"
});
formatter.result({
  "duration": 898276000,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.close_the_browser()"
});
formatter.result({
  "duration": 1203051400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "BMI calculate for 5 users",
  "description": "",
  "id": "calcluate-bmi;bmi-calculate-for-5-users;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Calulator page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"35\", \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Calcluate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcualteBMI.user_is_on_the_Calulator_page()"
});
formatter.result({
  "duration": 7284598200,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_clicks_on_BMI_calculator()"
});
formatter.result({
  "duration": 1708511500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 19
    },
    {
      "val": "70",
      "offset": 29
    }
  ],
  "location": "CalcualteBMI.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 254449600,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.user_click_on_Calcluate_BMI()"
});
formatter.result({
  "duration": 994111600,
  "status": "passed"
});
formatter.match({
  "location": "CalcualteBMI.close_the_browser()"
});
formatter.result({
  "duration": 1328645600,
  "status": "passed"
});
});