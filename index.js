const inquirer = require('inquirer')
const fs = require("fs")
const { default: Choices } = require('inquirer/lib/objects/choices')
// const name = `Your name is ${response.name}`
// const language = `You speak ${response.language}`
// const contact = `Your contact is ${response.contact}`

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your Project ?",
            name: "title"
        },{
            type: "input",
            message: "Breifly decribe your project",
            name: "description",
        },{
            type: "input",
            message: "User Story: AS AN...",
            name: "asAn",

        },{
            type: "input",
            message: "User Story: I WANT TO...",
            name: "wantTo",

        },{
            type: "input",
            message: "User Story: SO THAT I CAN...",
            name: "soThat",

        },
    ])
    .then((response)=>{  
        const txtString = `
# Project Title: ${response.title}

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

In this Homework assignment , ${response.description}

## Table of Contents

- [User Story](#user)
- [Acceptance Criteria](#acceptance)
- [Example](#example)
- [Notes](#notes)

## User Story

AS AN ${response.asAn}

I WANT to ${response.wantTo}

SO THAT I can ${response.soThat}


## Acceptance Criteria

* GIVEN...
* WHEN...


## Example Image

* Include Image HERE

## 💡 Notes

Some additional notes on the written code:

1. describe methods used...
`

    fs.writeFileSync('Readme.md',txtString, (err)=>{
        err ? console.log(err) : console.log('success')
    })
    console.log("Your ReadMe.md has been created")
    console.log("Dont forget to fill out Acceptance Criteria and Include an Image!")
}
)