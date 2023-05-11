ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")


class Log:
    def dispara_log(message):
        return message


class LogError:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{NEGRITO}{message}{RESET}"


class LogWarning:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{NEGRITO}{message}{RESET}"


class LogSuccess:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{NEGRITO}{message}{RESET}"


print(Log.dispara_log("Mensagem de log"))
print(LogError(Log).dispara_log("Mensagem de Erro"))
print(LogWarning(Log).dispara_log("Mensagem de Aviso"))
print(LogSuccess(Log).dispara_log("Mensagem de Sucesso"))
