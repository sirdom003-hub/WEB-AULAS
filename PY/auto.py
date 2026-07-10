import pyautogui
import time
#acessa o suap
pyautogui.press('Win')
time.sleep(0.5)
pyautogui.write('Brave')
time.sleep(0.5)
pyautogui.press('enter')
time.sleep(2)
pyautogui.write('https://suap.ifrn.edu.br&#39')
pyautogui.press('enter')
time.sleep(2)
pyautogui.click(x,y)
pyautogui.write('matricula')
pyautogui.click(x,y)
pyautogui.write('senha')
time.sleep(1)
pyautogui.click(x,y)

# para obter a posição de x e y, use o código abaixo

import pyautogui
import time
print('Posicione o mouse no local desejado e aguarde...')
time.sleep(5)  # Tempo para você posicionar o cursor

# Obtém a posição atual do mouse como uma tupla (x, y)
x, y = pyautogui.position()
print(f"Posição X: {x}")
print(f"Posição Y: {y}")