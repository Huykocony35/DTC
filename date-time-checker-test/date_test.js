Feature("Date Time Checker Feature");

Scenario("Check date successfully with provided inputs", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the valid date message
  I.waitForText("Valid Date", 2); // Wait and check for the valid date message
  I.see("Valid Date"); // Verify that the valid date message is visible after submission
});

Scenario("Clear date fields", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Clear the form
  I.click({ css: 'button[type="button"]' });

  // Verification step to confirm the fields are cleared
  I.seeInField({ id: "year" }, ".");
  I.seeInField({ id: "month" }, ".");
  I.seeInField({ id: "day" }, ".");
});

Scenario("Check out-of-range date (day)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year, month, and out-of-range day fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "32");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Day is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Day is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check out-of-range date (month)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the year and out-of-range month fields
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "13");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Month is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Month is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check out-of-range date (year)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the out-of-range year fields
  I.fillField({ id: "year" }, "999");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the out-of-range error message
  I.waitForText("Input for Year is out of range!", 2); // Wait and check for the out-of-range error message
  I.see("Input for Year is out of range!"); // Verify that the out-of-range error message is visible after submission
});

Scenario("Check invalid date format (year)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid year format
  I.fillField({ id: "year" }, "abcd");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Year is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Year is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

Scenario("Check invalid date format (month)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid month format
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "abc");
  I.fillField({ id: "day" }, "11");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Month is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Month is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

Scenario("Check invalid date format (day)", async ({ I }) => {
  I.amOnPage("/"); // Navigate to the main page of your application

  // Fill in the invalid day format
  I.fillField({ id: "year" }, "2024");
  I.fillField({ id: "month" }, "6");
  I.fillField({ id: "day" }, "abc");

  // Submit the form
  I.click({ css: 'button[type="submit"]' });

  // Verification step to confirm the invalid format error message
  I.waitForText("Input for Day is in incorrect format!", 2); // Wait and check for the invalid format error message
  I.see("Input for Day is in incorrect format!"); // Verify that the invalid format error message is visible after submission
});

// Failing Test Cases



