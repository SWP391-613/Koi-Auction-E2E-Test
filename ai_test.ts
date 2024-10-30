Feature('ai');

// Scenario('test something', ({ I }) => {
//     I.amOnPage('http://localhost:3000');
//     pause();
// });


Feature('Login feature');

Scenario('Login with valid credentials', ({ I }) => {
    const email = 'son@gmail.com';
    const password = '123456';

    I.amOnPage('http://localhost:3000/login'); // replace '/login' with your actual login page URL

    I.seeElement('input[name="email"]');
    I.seeElement('input[name="password"]');
    I.seeElement('button[type="submit"]');

    I.fillField('input[name="email"]', email);
    I.fillField('input[name="password"]', password);

    I.click('button[type="submit"]');

    I.see('Login successfully'); // check that the user is logged in and sees a welcome message
    I.see('Home');
    I.wait(1)

});

Scenario('Login with no email credentials', ({ I }) => {
    const email = 'son@gmail.com';
    const password = '123456';

    I.amOnPage('http://localhost:3000/login'); // replace '/login' with your actual login page URL

    I.seeElement('input[name="email"]');
    I.seeElement('input[name="password"]');
    I.seeElement('button[type="submit"]');

    I.fillField('input[name="email"]', '');
    I.fillField('input[name="password"]', password);

    I.click('button[type="submit"]');

    I.see('Email is required'); // check that the user is logged in and sees a welcome message
    I.see('Home');
    I.wait(1)

});

Scenario('Login with no password credentials', ({ I }) => {
    const email = 'son@gmail.com';
    const password = '123456';

    I.amOnPage('http://localhost:3000/login'); // replace '/login' with your actual login page URL

    I.seeElement('input[name="email"]');
    I.seeElement('input[name="password"]');
    I.seeElement('button[type="submit"]');

    I.fillField('input[name="email"]', email);
    I.fillField('input[name="password"]', '');

    I.click('button[type="submit"]');

    I.see('Password is required'); // check that the user is logged in and sees a welcome message
    I.see('Home');
    I.wait(1)

});


Scenario('Login with invalid credentials', ({ I }) => {
    const email = 'invalid_email@example.com';
    const password = 'invalid_password';

    I.amOnPage('http://localhost:3000/login');

    I.seeElement('input[name="email"]');
    I.seeElement('input[name="password"]');
    I.seeElement('button[type="submit"]');

    I.fillField('input[name="email"]', email);
    I.fillField('input[name="password"]', password);

    I.click('button[type="submit"]');


    I.see('Data not found'); // check that the user sees an error message
    I.wait(1);

});

Feature('Web view');
Scenario('test something 1', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Blogs');

});

Scenario('test something 2', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Auctions');

});

Scenario('test something 3', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Login');

});

Scenario('test something 4', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Kois');

});

Scenario('test something 5', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Blogs');

});

Scenario('test something 6', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('.svg');

});

Scenario('test something 7', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.click('.svg');
    I.see('Koi Auction');

});

Scenario('test something 8', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.click('About');
    I.see('Welcome to Koi Auction!');

});

Scenario('test something 9', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.scrollTo('footer');
    I.see('Phone: +1 (865) 876-7474');
    I.see('Email: contact@auctionkoi.com');

});

Scenario('test something 10', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.scrollTo('footer');
    I.click('Auctions');
    I.see('Sealed Price Auction');

});

Scenario('test something 11', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.scrollTo('footer');
    I.click('Auctions');
    I.click('About');
    I.click('Kois');

});

Scenario('test something 12', ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Kois');

});

Feature('Register Test');

Scenario('not successful registration with no first name', ({ I }) => {
    I.amOnPage('http://localhost:3000/register');

    // Leave the first name field empty
    I.fillField('#first_name', '');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Fill in the email field
    I.fillField('#email', 'john.doe@example.com');

    // Fill in the password fields
    I.fillField('#password', 'password123');
    I.fillField('#confirm_password', 'password123');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that an error message is shown
    I.see('First name is required');

});

Scenario('not successful registration with no last name', ({ I }) => {
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Leave the last name field empty
    I.fillField('#last_name', '');

    // Fill in the email field
    I.fillField('#email', 'john.doe@example.com');

    // Fill in the password fields
    I.fillField('#password', 'password123');
    I.fillField('#confirm_password', 'password123');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that an error message is shown
    I.see('Last name is required');

});

Scenario('not successful registration with no email', ({ I }) => {
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Leave the email field empty
    I.fillField('#email', '');

    // Fill in the password fields
    I.fillField('#password', 'password123');
    I.fillField('#confirm_password', 'password123');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that an error message is shown
    I.see('Email is required');

});

Scenario('not successful registration with invalid password', ({ I }) => {
    // Go to the registration page
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Fill in the email field
    I.fillField('#email', 'john.doe@example.com');

    // Fill in the password field
    I.fillField('#password', 'password123');

    // Fill in the confirm password field
    I.fillField('#confirm_password', 'password123');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Verify the checkbox is checked
    I.seeCheckboxIsChecked('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that the registration was successful
    I.see('Password must contain');
    I.wait(1);

});

Scenario('not successful registration with not fill confirm password', ({ I }) => {
    // Go to the registration page
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Fill in the email field
    I.fillField('#email', 'john.doe@example.com');

    // Fill in the password field
    I.fillField('#password', 'password123');

    // Fill in the confirm password field
    I.fillField('#confirm_password', '');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Verify the checkbox is checked
    I.seeCheckboxIsChecked('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that the registration was successful
    I.see('Passwords must match');
    I.wait(1);

});

Scenario('not successful registration with no check policy', ({ I }) => {
    // Go to the registration page
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Fill in the email field
    I.fillField('#email', 'john.doe@example.com');

    // Fill in the password field
    I.fillField('#password', 'Password123');

    // Fill in the confirm password field
    I.fillField('#confirm_password', 'Password123');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Verify the checkbox is checked
    I.seeCheckboxIsChecked('input[name="acceptPolicy"]');

    // Uncheck the policy acceptance checkbox
    I.uncheckOption('input[name="acceptPolicy"]');

    // Verify the checkbox is unchecked (corrected method name)
    I.dontSeeCheckboxIsChecked('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that the registration was successful
    I.see('You must accept the policy');
    I.wait(1);

});

Scenario('not successful registration with existing email', ({ I }) => {
    // Go to the registration page
    I.amOnPage('http://localhost:3000/register');

    // Fill in the first name field
    I.fillField('#first_name', 'John');

    // Fill in the last name field
    I.fillField('#last_name', 'Doe');

    // Fill in the email field
    I.fillField('#email', 'son@gmail.com');

    // Fill in the password field
    I.fillField('#password', 'Password123@');

    // Fill in the confirm password field
    I.fillField('#confirm_password', 'Password123@');

    // Check the policy acceptance checkbox
    I.checkOption('input[name="acceptPolicy"]');

    // Verify the checkbox is checked
    I.seeCheckboxIsChecked('input[name="acceptPolicy"]');

    // Click the "Submit" button
    I.click('button[type="submit"]');

    // Assert that the registration was successful
    I.see('Email already exists');
    I.wait(1);

});

// Scenario('successful registration', ({ I }) => {
//     // Go to the registration page
//     I.amOnPage('http://localhost:3000/register');

//     // Fill in the first name field
//     I.fillField('#first_name', 'John');

//     // Fill in the last name field
//     I.fillField('#last_name', 'Doe');

//     // Fill in the email field
//     I.fillField('#email', 'john.doe@example.com');

//     // Fill in the password field
//     I.fillField('#password', 'Password123@');

//     // Fill in the confirm password field
//     I.fillField('#confirm_password', 'Password123@');

//     // Check the policy acceptance checkbox
//     I.checkOption('input[name="acceptPolicy"]');

//     // Verify the checkbox is checked
//     I.seeCheckboxIsChecked('input[name="acceptPolicy"]');

//     // Click the "Submit" button
//     I.click('button[type="submit"]');

//     // Assert that the registration was successful
//     I.see('Successfully');
//     I.wait(3);
//      
// });

//test self-heal
Scenario('Login with valid credentials', ({ I }) => {
    const email = 'son@gmail.com';
    const password = '123456';

    I.amOnPage('http://localhost:3000/login'); // replace '/login' with your actual login page URL

    I.seeElement('input[name="email"]');
    I.seeElement('input[name="password"]');
    I.seeElement('button[type="submit"]');

    I.fillField('input[name="email"]', email);
    I.fillField('input[name="password"]', password);

    I.click('anh');

    I.see('Login successfully'); // check that the user is logged in and sees a welcome message
    I.see('Home');
    I.wait(1)

});

Feature("test blogs and posts");

Scenario("test blogs and posts", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.see("Blogs");
    I.wait(1);
    I.click("Blogs");
    I.seeNumberOfElements(".group", 27);
    I.wait(1);

});

Feature("test About page");

Scenario("test about page", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.see("About");
    I.wait(1);
    I.click("About");
    I.see("Welcome to Koi Auction!");
    I.wait(1);

});

Scenario("test about page and grab contact info", async ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.see("About");
    I.wait(1);
    I.click("About");
    I.see("Phone: +1 (865) 876-7474");
    I.see("Email: contact@auctionkoi.com");
    I.wait(1);

});

Feature("test bidding");

Scenario("test bidding with no login 1", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.click('Auctions');
    I.click('Sealed Price Auction');
    I.wait(1);
    I.see('Black Diamond');
    I.click('Black Diamond');
    I.fillField('input[type="number"]', '1000');
    I.click('button[type="submit"]');
    I.see('You must login to bid');
    I.wait(1);

});

Feature("test bidding");

Scenario("test bidding with no login 2", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.click('Auctions');
    I.click('Sealed Price Auction');
    I.wait(1);
    I.see('Kohaku');
    I.click('Kohaku');
    I.fillField('input[type="number"]', '1000');
    I.click('button[type="submit"]');
    I.see('You must login to bid');
    I.wait(1);

});

Feature("test bidding");

Scenario("test bidding with no bid", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.click('Auctions');
    I.click('Sealed Price Auction');
    I.wait(1);
    I.see('Black Diamond');
    I.click('Black Diamond');
    I.fillField('input[type="number"]', '0');
    I.click('button[type="submit"]');
    I.see('Bid must be greater than 0');
    I.wait(1);

});

Feature("test bidding");

Scenario("test bidding with negative bid", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.click('Auctions');
    I.click('Sealed Price Auction');
    I.wait(1);
    I.see('Kohaku');
    I.click('Kohaku');
    I.fillField('input[type="number"]', '-4');
    I.click('button[type="submit"]');
    I.see('Bid must be greater than 0');
    I.wait(1);

});