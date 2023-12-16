import time
import pyautogui


def click_at_location(x, y, clicks, interval):
    """
    특정 위치를 반복해서 클릭하는 함수.

    :param x: X 좌표
    :param y: Y 좌표
    :param clicks: 클릭 횟수
    :param interval: 클릭 간격 (초)
    """
    try:
        for _ in range(clicks):
            pyautogui.click(x, y)
            time.sleep(interval)
    except KeyboardInterrupt:
        print("사용자에 의해 종료되었습니다.")


# 사용 예시: (100, 100) 위치를 5번 클릭하고 클릭 간격은 1초로 설정
click_at_location(1182, 148, 870, 1)
