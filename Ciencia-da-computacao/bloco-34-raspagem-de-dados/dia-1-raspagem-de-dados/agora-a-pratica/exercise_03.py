# Exercício 3:
# Às vezes, você precisa fazer com que o seu raspador da Web pareça estar
# fazendo solicitações HTTP como o navegador, para que o servidor retorne
# os mesmos dados que você vê no seu navegador. Faça uma requisição a
# https://scrapethissite.com/pages/advanced/?gotcha=headers
# e verifique se foi bem sucedida.

# ⚠️ Para verificar se a requisição foi bem sucedida,
# faça assert "bot detected" not in response.text.
# Se nada acontecer, seu código está funcionando. ⚠️
# Faça a inspeção de como a requisição é feita pelo
# navegador para conseguir replicar através do código.

from requests import get

response = get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0"
    },
)
assert "bot detected" not in response.text
