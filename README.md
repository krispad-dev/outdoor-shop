# outdoor-shop, simple web shop prototype for outdoor related products.


### Background

This project is built is a hand in assignemnt built using React, Node and Express.
database: PostgreSQL

Tested with [Testing-Library](https://testing-library.com/) and [Jest-DOM](https://www.npmjs.com/package/@testing-library/jest-dom)


### Pulished app

[Outdoor Shop](https://nature-shop.herokuapp.com/)


## User stories (swesdish)

- som användare vill jag kunna logga in på mitt konto så jag så jag får möjlighet att handla.
  &nbsp;
- som användare vill jag kunna spara varor i min varukorg för att får översikt över de produkter jag eventuellt vill handla och komma tillbaka till dem senare.
  &nbsp;
- som användare vill jag kunna se en lista på tillgängliga produkter direkt när jag kommer in i appen så jag lättare får en överblick över vad som finns tillgängligt.
  &nbsp;
- som användare vill jag där jag befinner mig kunna söka på produkttitel för att snabbt hitta den produkt jag letar efter.
  &nbsp;
- Som användare vill jag se produktnamn, pris, bild och kategori direkt i listan så jag snabbt kan få en idé om produkten är intressant för mig.
  &nbsp;
- Som användare och/eller administratör vill jag kunna logga ut från mitt konto när jag är klar för att vara säker på att ingen annan kan använda mitt konto.
  &nbsp;
- som användare vill jag ha möjligheten att öka och minska antalet av en specifik produkt i min varukorg så jag slipper lägga till fler av samma produkt.
  &nbsp;
- Som användare vill jag direkt i menyn se hur många produkter som finns i varukorgen för att snabbt få en indikation utan att behöva gå in i varukorgen för att kolla.
  &nbsp;
- som administratör vill jag kunna logga in i appen så jag får möjlighet att administrera alla produkter som finns i appen.
  &nbsp;
- som administratör vill jag kunna lägga till, ta bort och/eller ändra produkter i appen så jag snabbt kan hålla kunderna uppdaterade om vad som finns på lagret.
  &nbsp;
- som administratör vill jag direkt i editeringsläge kunna söka fram rätt produkt för att slippa byta läge när en produkt skall raderas eller editeras.
  &nbsp;
- som användare vill jag se totalsumman på alla samlade varor i varukorgen så jag inte spenderar mer än vad jag har planerat.

&nbsp;


## Clone, install, run and test:

### 0. Clone project: `git clone https://github.com/krispad-dev/outdoor-shop.git`


### 1. Run server in dev mode:

1. from root dir (outdoor-shop): `cd app`
2. inside app dir: `npm i`
3. inside app dir: add the .env file with the (correct) enviroment variables
4. inside app dir: `npm run dev`
    &nbsp;

### 2. Run client in dev mode

1. inside root dir (outdoor-shop): `cd client`
2. inside client dir: `npm i`
3. inside app dir: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Run frontend tests:


1. inside root dir (outdoor-shop): `cd client`
2. if not already installed - inside client dir: `npm i`
3. inside app dir: `npm run test`
