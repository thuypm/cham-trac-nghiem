
import cv2
import numpy as np
import json
import sys
from itertools import combinations
import matplotlib.pyplot as plt
from rotateandcrop import cropAndRotate
from key import processKey
from partOne import processPartOne
from partTwo import processPartTwo
from sbd import processStudentId


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python align_image.py <input_image> <output_image>")
        sys.exit(1)
    image_path = sys.argv[1]
    output_path = sys.argv[2]
    cropAndRotate(image_path, output_path)
    imgHandle = cv2.imread(output_path)
    studentId = processStudentId(imgHandle)
    key = processKey(imgHandle)
    partOne = processPartOne(imgHandle)
    partTwo = processPartTwo(imgHandle)
    partThree = processPartOne(imgHandle)
    data = {
    "studentId": studentId
    }

# Thêm các phần nếu không rỗng
    if partOne:
        data["partOne"] = partOne
    if partTwo:
        data["partTwo"] = partTwo
    if partThree:
        data["partThree"] = partThree
        print(studentId, key)
        