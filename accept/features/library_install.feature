Feature: library install

  Scenario: as a user I can install neopixel as a vendored library
    When I run particle "library install --vendored neopixel"
    Then the stdout should not contain anything
    And the file "lib/neopixel/library.properties" should exist
    And the file "lib/neopixel/src/neopixel.cpp" should exist
    And the file "lib/neopixel/src/neopixel.h" should exist