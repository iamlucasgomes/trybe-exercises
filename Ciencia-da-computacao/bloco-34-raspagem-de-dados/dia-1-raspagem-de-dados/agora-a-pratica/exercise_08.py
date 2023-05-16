# Exercício 8: Agora um desafio!
# Vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags
# e recupere as imagens de todas as bandeiras.

from requests import get
from parsel import Selector

url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = get(url)
selector = Selector(text=response.text)
for img in selector.css("div.gallerybox img::attr(src)").getall():
    print(img)
