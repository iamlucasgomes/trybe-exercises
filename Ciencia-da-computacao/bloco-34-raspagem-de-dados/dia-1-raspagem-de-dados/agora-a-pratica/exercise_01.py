from requests import get
from parsel import Selector

# Faça uma requisição ao site https://httpbin.org/encoding/utf8
# e exiba seu conteúdo de forma legível.

url = "https://httpbin.org/encoding/utf8"
response = get(url)
selector = Selector(text=response.text)
print(selector.css("body").xpath("string()").get().strip())
