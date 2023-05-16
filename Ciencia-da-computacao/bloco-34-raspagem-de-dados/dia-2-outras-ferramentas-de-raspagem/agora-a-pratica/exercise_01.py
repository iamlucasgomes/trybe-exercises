# Exercício 1
# Com o Selenium, faça uma requisição para o endpoint
# “https://quotes.toscrape.com/“ e imprima a primeira
# citação que aparece na página.


from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

url = "https://quotes.toscrape.com/"
browser = Chrome()
browser.get(url)
quote = browser.find_element(By.CSS_SELECTOR, "span.text")
print(quote.text)
browser.quit()
