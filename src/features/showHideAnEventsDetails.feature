Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given events show for a location (e.g., Munich, Germany)
When the user scrolls down the page of events
Then each event element will show a link for additional information

Scenario: User can expand an event to see its details
Given events show for a location (e.g., Munich)
When the user clicks on Show details for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the user has expanded an event to show its details
When the user is finished reading the information
Then the user can collapse the event to hide its details
