import {query} from "../index.js";

export async function createIngredientsTable(){
   const sqlstring = `CREATE TABLE IF NOT EXISTS ingredients (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT);`;
   const res = await query (sqlstring);
   console.log(res.command, "table created");
}
   
createIngredientsTable();