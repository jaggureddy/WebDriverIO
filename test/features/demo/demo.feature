Feature: Demo Feature

    @demoTag
    Scenario Outline: Run first demo feature
        Given Open google
        When Search a <keyword>
        Then Click on first search result
        Then URL should match <url>


        Examples:
            | TestId | keyword     | url                   |
            | 1      | webdriverio | https://webdriver.io/ |


