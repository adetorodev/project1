# Working With MongoDB
## Section 1 — NoSQL vs SQL (Clear-Cut Comparison, No Fluff)
| SQL                        | NoSQL (MongoDB)                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------- |
| Relational, table-based    | Document-based, schema-flexible                                                     |
| Requires fixed schema      | Schema-on-write is optional                                                         |
| Vertical scaling           | Horizontal scaling                                                                  |
| Complex JOINs              | Embedding + referencing                                                             |
| ACID transactions (strong) | Eventual consistency (improving with ACID transactions for single docs/collections) |


## Skeptical take:
Don’t romanticize NoSQL. It doesn’t magically fix poor architecture. MongoDB shines for hierarchical/JSON-like data and high-write workloads—not as a replacement for every relational use case.

## Section 2 — MongoDB Fundamentals
Collections

Equivalent of a “table”, but without enforced schema.

Can hold documents of different shapes (powerful but dangerous if abused).

Documents

JSON objects stored as BSON.

Nested structures allow you to represent real-world objects naturally.

Use this strength or you’ll end up with spaghetti structures.

Schema Design

Two major styles:

Embedding (denormalization)

Referencing (normalization)

Rule of thumb:
Embed until it hurts → Reference until it hurts.

Example: Blogging App

Embed comments inside posts?
Good for small/medium comment loads.

Reference comments for massive/high-write workloads.



5TM2yym3EOl6PbB5

adetoroe787_db_user

mongodb+srv://adetoroe787_db_user:5TM2yym3EOl6PbB5@cluster0.tvq4zgh.mongodb.net/?appName=Cluster0