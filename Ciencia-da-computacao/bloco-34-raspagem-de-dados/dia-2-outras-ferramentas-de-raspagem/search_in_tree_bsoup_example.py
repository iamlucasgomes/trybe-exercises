import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

# Imprime todas as ocorrências da tag "p" da página ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("p"))

# Imprime o elemento com o id especificado ou "None",
# caso nenhum elemento corresponda a pesquisa
print(soup.find(id="quote"))

# Imprime todo o texto da página
print(soup.get_text())

# Imprime todas as "divs" que possuam a classe "quote" ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("div", {"class": "quote"}))
