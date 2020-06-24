# URL Shortener Microservice

1. User can POST a URL to `[project_url]/api/shorturl/new` and user will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":awers}`
2. If user pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`. 
3. When user visit the shortened URL, it will redirect it to its original link.

#### Creation Example:

POST [project_url]/api/shorturl/new - body (urlencoded) :  url=https://www.google.com

#### Usage:

[this_project_url]/api/shorturl/apwls

#### Will redirect to:

A page saved