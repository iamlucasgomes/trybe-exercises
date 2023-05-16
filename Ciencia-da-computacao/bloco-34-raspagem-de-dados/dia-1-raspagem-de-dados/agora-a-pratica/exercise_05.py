# Exercício 5:
# Faça o cálculo de quantos livros publicados (STATUS = PUBLISH)
# temos em nosso banco de dados por categoria.
# Ordene-os de forma decrescente de acordo com a quantidade.

# ⚠️ Você pode utilizar agreggation framework para auxiliar neste exercício.

# Saída:

# Copiar
# Java 95
# Internet 41
# Microsoft .NET 33
# Web Development 16
# Software Engineering 15
# Business 12
# Programming 12
# Client-Server 11
# Microsoft 8
# Theory 7
# ...

from pymongo import MongoClient

client = MongoClient()
db = client.library

pipeline = [
    {"$match": {"status": "PUBLISH"}},
    {"$group": {"_id": "$category", "count": {"$sum": 1}}},
    {"$sort": {"count": -1}},
]

for book in db.books.aggregate(pipeline):
    print(book["_id"], book["count"])
