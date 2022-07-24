import neo4j from 'neo4j-driver'

type ConnectionURL = `${'bolt' | 'neo4j'}://localhost:${number}`
const URL: ConnectionURL = 'bolt://localhost:7687'

export const driver = neo4j.driver(URL, neo4j.auth.basic('neo4j', 'pass'))
export const session = driver.session()

interface IPerson {
  name: string
}

export async function chyperCreateTest({ name }: IPerson) {
  try {

    const result = await session.run(
      'CREATE (a:Person {name: $name}) RETURN a',
      { name }
    )

    const singleRecord = result.records[0]
    const node = singleRecord.get(0)

    console.log(node.properties.name)
  } catch (o_O) {
    console.log(`Error:`, o_O);
  }
}
/*
var r=require("request");
var txUrl = "http://localhost:7474/db/data/transaction/commit";
function cypher(query,params,cb) {
  r.post({uri:txUrl,
          json:{statements:[{statement:query,parameters:params}]}},
         function(err,res) { cb(err,res.body)})
}

// -----------------
var query="MATCH (n:User) RETURN n, labels(n) as l LIMIT {limit}"
var params={limit: 10}
var cb=function(err,data) { console.log(JSON.stringify(data)) }

cypher(query,params,cb)

{"results":[
  {"columns":["n","l"],
   "data":[
     {"row":[{"name":"Aran"},["User"]]}
    ]
  }],
 "errors":[]}
*/