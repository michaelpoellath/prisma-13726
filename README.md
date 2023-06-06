# Prisma Generator

Sample Generator to investigate DMMF issues related to issue [#13726](https://github.com/prisma/prisma/issues/13726).



## Install node modules

```
npm i
```

## Build and Run

```
npm run test
```
This command will build the generator and execute `npx prisma generate`.


## Conclusion

With the given [schema](prisma/schema.prisma), one can clearly see that only doc strings on models and their fields are shown, while types do not expose any docs via the DMMF.

```
❯ npm run test

> prisma-generator-test@1.0.0 test
> npm run build  && npx prisma generate


> prisma-generator-test@1.0.0 build
> npx tsc

Prisma schema loaded from prisma/schema.prisma
prisma:info prisma-generator-test:Registered
prisma:info 

==== Print Documentation on Models:
prisma:info MODEL "person" -- docs: "A Person"
prisma:info FIELD "name" -- docs: "Name of  the Person"
prisma:info FIELD "id" -- docs: "undefined"
prisma:info 

==== Print Documentation on types:
prisma:info TYPE "name" -- docs: "undefined"
prisma:info FIELD "firstname" -- docs: "undefined"
prisma:info FIELD "lastname" -- docs: "undefined"
...
```
