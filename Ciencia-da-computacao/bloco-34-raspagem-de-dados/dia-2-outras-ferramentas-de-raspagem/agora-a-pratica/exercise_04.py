# Exercício 4
# Com o Beautiful Soup, faça a extração de todos os
# links da página “https://pt.wikipedia.org/wiki/Rock_in_Rio”

# ✨ Dica: Dê uma espiada na seção sobre
# atributos na documentação da ferramenta.


from requests import get
from bs4 import BeautifulSoup

url = "https://pt.wikipedia.org/wiki/Rock_in_Rio"
response = get(url)
html = BeautifulSoup(response.text, "html.parser")
html_links = html.find_all("a")
for link in html_links:
    print(link.get("href"))
