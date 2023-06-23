
# Geoprofs
C# 4e periode eindopdracht

### Disclaimer
Wanneer je verlof heb ingediend maar je ziet hem er niet tussen (check je console tab) als je een CORS weigering ziet installeer **CORS unblock extension**

STAPPENPLAN
-----------
Geoprofs bestaat uit 2 folders client en de server 

1. > /geocore
   
2. > Ga naar de **Appsettings.Development.json** om de connectionstring genaamd **GeoConnection** aan te passen.
3. >  terminal > **dotnet ef migrations add** (of via nudget manager)
4. >  **dotnet ef database update**
5. >  Run de asp.net applicatie **met de port 5029** svp.

**Client**

1. > /geocore/client
2. > Wanneer je in de client folder zit voer **npm i** uit in de terminal.
3. > terminal > **npm run dev**

**Voor de duidelijkheid** <br>
ga naar de react app en voer je naam en functie in (deze 2 informatie wordt opgeslagen in de localstorage en niet in de database)

   
