import { config } from "dotenv";
config()
export const port = process.env.PORT || 8084;
const host = process.env.host || 'localhost';
const user = process.env.user || 'root';
const password = process.env.password || 'Castillo105.dct';
const database = process.env.database || 'alumnos';
const dbport = process.env.dbport || 3306