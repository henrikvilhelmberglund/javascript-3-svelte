# Component lifecycle

**Mount** (komponenten visas ut på DOM)

**Updating** (komponenten uppdateras)

**Unmount** (tar bort komponenten från DOM)

kan hooka på events till de här tre stadierna

när vi startar applikationen laddar vi startsidan men visar inte todon än (mycket data)

vi vill visa todon när vi trycker på Show Todo-knappen, så vi hämtar all data i **mount** för todo-komponenten

i **updating** kan vi lyssna efter ändringar, om något ändras kan vi ändra i databasen med alla todos

i **unmount** kan vi ha en cleanup när komponenten tas bort, t.ex spara data i localstorage

## useEffect()

regler för när komponent ska renderas

två argument, funktion och dependency array []

med tom dependency array körs den en gång när den mountas

useEffect är bra om man t.ex vill fetcha data när man startar appen

om man vill göra något när komponenten unmountas kan man returnera en funktion i useEffect(), den körs bara när komponenten unmountas

innan fanns fler lifecycle events men folk använde dem fel så allt utom tre togs bort

om man vill ha **updating** kan man lägga till något i [], t.ex [count], så körs den när `count` ändras

glöm inte bort [], annars blir det infinite loop

## Vite

snabbare än npx create-react-app (både installation och uppdatering av kod)

`npm create vite@latest`

sen välja React, JavaScript

`npm run dev`

## CSS modules

Counter, Header i egna mappar

Counter.module.css

Header.module.css

App.css är global, blir CSS för alla komponenter

istället kan vi använda CSS modules, sedan importera i komponent, sedan t.ex `className={styles.heading1}`

vanligt med `s`, `className={s.heading1}`

sedan får elementen unika klasser baserade på namnen i CSSmodulerna så att de inte krockar

alternativ till t.ex styles.heading1: styles["heading-2"]
