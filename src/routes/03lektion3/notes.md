# Component lifecycle

**Mount** (komponenten visas ut på DOM)

**Updating** (komponenten uppdateras)

**Unmount** (tar bort komponenten från DOM)

kan hooka på events till de här tre stadierna

när vi startar applikationen laddar vi startsidan men visar inte todon än (mycket data)

vi vill visa todon när vi trycker på Show Todo-knappen, så vi hämtar all data i **mount** för todo-komponenten

i **updating** kan vi lyssna efter ändringar, om något ändras kan vi ändra i databasen med alla todos

i **unmount** kan vi ha en cleanup när komponenten tas bort, t.ex spara data i localstorage
