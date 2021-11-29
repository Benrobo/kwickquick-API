CREATE DATABASE kwickquick;


-- organization table


CREATE TABLE organizations(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    "orName" TEXT NOT NULL,
    "orMail" TEXT NOT NULL UNIQUE,
    "orPassword" TEXT NOT NULL,
    "orLogo" TEXT NOT NULL,
    "orNumber" TEXT NOT NULL,
    "orgHash" TEXT,
    "refreshToken" TEXT NOT NULL,
    "orEntryDate" TIMESTAMP NOT NULL DEFAULT NOW()
);


-- product table

CREATE TABLE products(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    "orId" TEXT NOT NULL,
    "pName" TEXT NOT NULL,
    "pPrice" TEXT NOT NULL,
    "pImage" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "pCurrency" TEXT NOT NULL,
    "pDate" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Payment table

CREATE TABLE payments(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    "cName" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "pHash" TEXT [] NOT NULL,
    "orgHash" TEXT [] NOT NULL,
    status TEXT,
    "expiry" TEXT NOT NULL,
    "pDate" TIMESTAMP NOT NULL DEFAULT NOW()
);












