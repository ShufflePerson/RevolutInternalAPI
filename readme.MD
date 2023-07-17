# Revolut Credit Card API Wrapper

**Unofficial**

## Overview

This module helps you to manage your credit cards, through phone number + pin authentication.

For specif information about the Revolut API see my [UnOfficial Revolut's API documentation](Revolut.md).

## Usage
Simple example that utilizes all the current functions available.

```ts 
require("dotenv").config()
import Revolut from 'revolutapi'

let sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    //Make sure we have the environment variables
    if(!process.env.NUMBER || !process.env.PASSCODE) {
        throw new Error('Missing environment variables')
    }

    //Create a new instance of a revolut account
    let revolut = new Revolut(process.env.NUMBER, process.env.PASSCODE)

    //Signin with the credentials given in the constructor
    await revolut.signin()

    //Get all cards on the account
    console.log(await revolut.getCards())
    
    //Create a new virtual card with the label "hello!"
    let card = await revolut.newVirtualCard("hello!")

    //Get the expiry date, cvv and pan of the credit card
    let details = await revolut.getCardSecrets(card.id)
    console.log(details)

    //Revolut takes ~500ms to process the new card into their system
    await sleep(1000);
    
    //Delete the newly created card
    //await revolut.deleteCard(card.id)
})()
```

## Build

To build the libary, run `npm run build`

## Todo

- Finish the [UnOfficial Revolut's API documentation](Revolut.md)
- Add support for Freezing / UnFreezing Cards
- Add support for retrieving account's information
- Add support for setting limits on cards
- Add support for getting the current limit on a card