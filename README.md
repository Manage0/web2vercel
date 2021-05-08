# Very Secret Company 

/servertime

-get: Returns the current time on the server like "2021-05-03T13:10:50.251Z"

/generatenews

-post: Creates 3 different text as news for a user named test, it is for testing purposes only

/news

-post: Awaits a string named "user" and returns the news of the specific user in a String array

/login

-post: Awaits a password and a username and returns an error message or the jwt token

/register

-post: Awaits a password and a username and returns the ID of the created user

/checklogin

-get: returns true if user is logged in

/deleteme

-delete: Awaits a username and deletes it from the database. Returns "successfully", when completed

/membersndues

-post: awaits a user and returns its "payed" value

/pay

-put: awaits a user and updates its payed value to the opposite, that it was

/csrf-protection

-get: returns the requests csrf-token