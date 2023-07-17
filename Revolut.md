# API Documentation for Revolut
### Created and managed by [ShufflePerson](https://github.com/ShufflePerson)

## Overview
This document helps to document the use of the `app.revolut.com` internal API.

**Keep in mind:** *The `app.revolut.com` endpoint wasn't made, and isn't intended to be used by any external applications. It is an internal API designed to be used by Revolut apps.*

This document also briefly explains how the tokens work and how is the encryption/decryption done.

### Why is this API better than the public ones?
None of the public APIs provide control over your personal account, especially the credit cards. This API allows you to create, delete, control and manage your credit cards.

### Wrappers
Only wrapper that I have made, is in nodejs module. It has all the types and methods that are documented here.

### Not all routes are documented
While I actively add new routes, there will be some that I missed or simply didn't add. So just because something isn't documented here, doesn't mean the API doesn't have support for that.

## Routes
The base URL is `app.revolut.com/api/revolut-secure/retail`

### `/signin`

#### POST
Provided with account credentials, returns a token identifier.

##### Body
```json
{
    phone: string;
    password: string;
    channel: 'APP';
}
```

##### Response
```json
{
    tokenId: string;
}
```