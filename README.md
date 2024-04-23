# Moje veterina

## Instalace a spuštění
Pro lokální instalaci a spuštění projektu je nutné ve složkách 
jednotlivých service zadat následující sekvenci příkazů:

1. `npm install`
2. `npm install -g nodemon`
3. `npm run dev`

Rozložení microservice je následující:
- `api-gateway-service` - API gateway
- `animal-examinations-service` - microservice s kartotékou
- `invoice-service` - microservice starající se o faktury a platby
- `reservations-service` - microservice zajišťující rezervace
- `users-service` - microservice s uživateli zajišťující přihlašování do systému
- `svelte` - frontendová část pro administrátory (zaměstnance)
- `svelte-customer` - frontendová část pro klienty veteriny

## Docker
Pro správné spuštění na některých systémech je nutná malá
rekonfigurace souboru `.env`.

### `docker-compose.dev.yml`:
Pomocí tohoto souboru lze spustit všechny microservices v Dockeru.
Pro spuštění je vyžadováno, aby všechny microservices ve složkách měly 
doinstalované všechny balíčky pomocí `npm install`. Po spuštění je 
mapován obsah složek jednotlivých microservices a vkládán do jednotlivých
kontejnerů.

### `docker-compose.dev-run.yml`:
Pomocí tohoto souboru lze spustit všechny microservices v Dockeru.
Tuto variantu je určená pro okamžité spuštění, ale při změnách
v jednotlivých microservices je nutné vytvářet nové images.