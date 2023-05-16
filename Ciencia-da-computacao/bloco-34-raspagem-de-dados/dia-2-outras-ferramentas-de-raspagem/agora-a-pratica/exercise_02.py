# Exercício 2
# Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/“.


from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

url = (
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)
browser = Chrome()
browser.get(url)
paragraphs = browser.find_elements(By.CSS_SELECTOR, "p")
for paragraph in paragraphs:
    print(paragraph.text)
browser.quit()
