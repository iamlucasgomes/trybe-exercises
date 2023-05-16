# Exercício 3
# Utilizando a ferramenta Selenium, no site “https://diolinux.com.br/“,
# faça a extração dos campos título, link para o post,
# trecho exibido de cada post da página inicial.


from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

url = "https://diolinux.com.br/"
browser = Chrome()
browser.get(url)
titles = browser.find_elements(By.CSS_SELECTOR, "h3.post-title")
links = browser.find_elements(By.CSS_SELECTOR, "h3.post-title a")

for title, link in zip(titles, links):
    print(title.text)
    print(link.get_attribute("href"))

browser.quit()
