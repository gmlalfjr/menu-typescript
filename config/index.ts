export const config = {
  jwt: process.env.JWT_SECRET,
  db: process.env.DB,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbDialect: process.env.DB_DIALECT
}