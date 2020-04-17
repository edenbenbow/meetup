Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn't specified a number, 32 is the default number
Given a location (e.g., Munich, Germany) is showing events
When the user does not specify the number of events to display
Then the app will show 32

Scenario: User can change the number of events they want to see
Given a location is showing events
When the user selects how many events they'd like to display
Then the app will show the specified number of events
