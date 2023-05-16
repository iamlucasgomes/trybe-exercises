from selenium import webdriver
from time import sleep

driver = webdriver.Chrome()

response = driver.get("https://www.python.org/")

sleep(10)
