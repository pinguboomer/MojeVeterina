function createUser(dbName, userName, password) {
    db = db.getSiblingDB(dbName);
    db.createUser(
        {
            user: userName,
            pwd: password,
            roles: [
                {
                    role: "readWrite",
                    db: dbName
                }
            ]
        }
    );
}

// Použití funkce
createUser(process.env.ANIMAL_EXAMINATIONS_DB, process.env.ANIMAL_EXAMINATIONS_USERNAME, process.env.ANIMAL_EXAMINATIONS_PASSWORD);
createUser(process.env.INVOICES_DB, process.env.INVOICES_USERNAME, process.env.INVOICES_PASSWORD);
createUser(process.env.RESERVATIONS_DB, process.env.RESERVATIONS_USERNAME, process.env.RESERVATIONS_PASSWORD);
createUser(process.env.USERS_DB, process.env.USERS_USERNAME, process.env.USERS_PASSWORD);