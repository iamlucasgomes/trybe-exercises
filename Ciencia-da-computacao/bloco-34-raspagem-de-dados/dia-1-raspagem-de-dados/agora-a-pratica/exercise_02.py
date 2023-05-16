# Exercício 2:
# Faça uma requisição ao recurso usuários da
# API do Github (https://api.github.com/users),
# exibindo o username e url de todos os usuários retornados.

from requests import get

url = "https://api.github.com/users"
response = get(url)
data = response.json()
for user in data:
    print(user["login"], user["url"])
