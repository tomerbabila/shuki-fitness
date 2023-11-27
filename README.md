# Shuki Fitness

## Introduction

Welcome to Shuki fitness! you can visit us [here](https://shuki-fitness.web.app/)

# Getting Started

If it's your first time installing this project, do the following:

1. Run `npm ci`
2. in `src/environment` folder, Create an `environment.ts` file base on in `environment.example.ts`
3. Replace the rules on `Firebase Database` with the rules in `firestore.rules` file **or** use `npm run deploy:rules` command
4. Run `npm run start`
5. Enjoy!

## Build & Deploy

Unfortunately, in the moment we do not have CI/CD progress. If you wish to deploy a new version, you need to run `npm run deploy` and wait.

## Commands

- `npm run start` - start the project
- `npm run deploy` - deploy a new version to production
- `npm run deploy:rules` - deploy the new rules
