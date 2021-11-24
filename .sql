CREATE DATABASE kwickquick;


-- organization table


CREATE TABLE organizations(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    "orName" TEXT NOT NULL,
    "orMail" TEXT NOT NULL UNIQUE,
    "orPassword" TEXT NOT NULL,
    "orLogo" TEXT NOT NULL,
    "orNumber" INT NOT NULL,
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
    "pQrcode" TEXT NOT NULL,
    "pCurrency" TEXT NOT NULL,
    "pDate" TIMESTAMP NOT NULL DEFAULT NOW()
);