import fitz  # PyMuPDF
from processImage import processImage
from pymongo import MongoClient
import sys

client = MongoClient("mongodb://localhost:27017/")
db = client["exam"]
collection = db["exam"]

pdf_path = 'E:/OneDrive - Marie Curie/scanner/19042025\PDF/Toán 10 . 1.pdf'
doc = fitz.open(pdf_path)

for i, page in enumerate(doc):
    try:
        pix = page.get_pixmap(dpi=200)  # có thể chỉnh dpi (100–300)
        data = processImage(pix)
        result = collection.insert_one(data)
    except Exception as e:
        collection.insert_one({})
 
if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python align_image.py <input_image> <output_image>")
        sys.exit(1)
    image_path = sys.argv[1]
    output_path = sys.argv[2]
