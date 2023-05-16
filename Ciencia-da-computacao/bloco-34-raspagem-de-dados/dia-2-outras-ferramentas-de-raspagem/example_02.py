from selenium import webdriver
from selenium.webdriver.common.keys import Keys  # Importa teclas comuns
from time import sleep

chrome = webdriver.Chrome()

response = chrome.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = chrome.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)

sleep(15)
