# Daily Bread

Take care of your finances  and reach to your finantial objectives. This is the backend of project built as an API with TypeScript and NodeJS.

## SUMMARY

1. [Objectives](#objectives)
2. [Dependencies](#dependencies)
3. [Relationships](#relationships)
4. [Project Path](#project-path)
5. [Routes and Requests](#routes-and-requests)
6. [License](#license)
7. [Frequent Questions](#frequent-questions)

## Objectives
Manage the money is the only way to reach our dreams without much pains. When people get so much not need bills or dues, organize can be a challenge, mainly when you haven't the required knowledge.

To solve these questions, I present to you my solution to keep your finances safe and reach to your objectives.

One account and you can use our services with data security and manage your finances better.

## Relationships
**Account**: the origin, you need to create one to use this software.

Relationships of *Account*:
* Bank;
* Money;
* Recursive Payment;

**Bank**: to register the bank operations.

Relationships of *Bank*:
* PixKey;
* BankBox -> BankBoxOperation;
* BankOperation;
* Card -> Invoice -> Payment;
* BankOperation <> Payment;

**Money**: to register how many cash you're at your hands.

Relationships of *Money*:
* MoneyOpearion;
* MoneyBox;
* Both relationship to MoneyBoxOpeartion.

**Recursive Payment**: to register not waited payments.

Relationships of *Recursive Payments*:
* Only to Account.

## Dependencies
The dependencies of this project can be found [here](package.json). We use the **ecma script** version 2017, you can find at our [tsconfig.json](tsconfig.json) file.

The **node** version this project was built is `20.17.0`.

We strongly recommend to use nvm you download this specific version for your environment.

Once the node is installed to your machine, please run the following command:

```commandline
npm install
```

*Please configure the [.env.example](.env.example) file, copy and paste it with name `.env` and configure their variables to your context.*

Before run, please check your enviroment, as local or production. To see how to run the migrations, please check the [FAQ](#frequent-questions) at detail **How to Migrate**. The chosen SGBD was **PostgreSQL**.

To run the project, please access the [FAQ](#frequent-questions) at detail **How To Run**.

## Project Path
The root of project is in the main package or folder named 'daily-bread' by default.

* **daily-bread**:

```
prisma/
src/
├──controllers/
├──core/
├──├──calculators/
├──├──db/
├──domain/
├──dtos/
├──enumerates/
├──exceptions/
├──interfaces/
├──middlewares/
├──models/
├──repositories/
├──routes/
├──services/
├──types/
├──use-cases/
├──├──account/
├──utilities/
├──├──checkers/
├──├──data-getter/
├──├──dto-adapters/
├──├──enum/
├──├──security/
.env.example
.gitignore
app.ts
LICENSE
package-lock.json
package.json
README.md
tsconfig.json
```

## Routes and Requests
> /api/user -> create a new account;

> /api/user/login -> make login to our system;

## License
Our license is **GNU GENERAL PUBLIC LICENSE**.

For more information, access our [license](LICENSE).

## Frequent Questions

<details>
    <summary>
        How to Run?
    </summary>
    <p>
        At the file <a href="package.json">package.json</a> you can find the attribute scripts with some commands. To run then, just use the following structure: <code>npm run &ltcommand-name&gt</code>.
    </p>
    <p>
        To run, please use: <code>npm run start</code> into the console.
    </p>
</details>

<details>
    <summary>
        How to Migrate?
    </summary>
    <p>
        This project is configurated ton use <b>PostgreSQL</b> as SGBD. <b>Prisma</b> as ORM.
    </p>
    <p>
        To format prisma, run: <code>npx prisma format</code>
    </p>
    <p>
        To create a new migration LOCAL, run: <code>npx prisma migrate dev --name "&ltphrase&gt"</code> <br>
        To run it: <code>npx prisma migrate dev</code>
    </p>
    <p>
        To create a new migration ONLINE, run: <code>npx prisma migrate --name &ltphrase&gt"</code> <br>
        To run it: <code>npx prisma migrate</code>
    </p>
    <p>
        To <b>reset</b> all migrations: <code>npx prisma migrate reset</code>
    </p>
    <p>
        To <b>deploy</b> a new migration: <code>npx prisma migrate deploy</code>
    </p>
</details>

That's all Folks!!!
