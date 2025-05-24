import fitz  # PyMuPDF
from processImage import processImage
from pymongo import MongoClient
import sys
from bson.objectid import ObjectId

client = MongoClient("mongodb://localhost:27017/")
db = client["exam"]
collection = db["assignments"]

# pdf_path = 'E:/OneDrive - Marie Curie/scanner/19042025/PDF/MC2 Toán 10.pdf'
# doc = fitz.open(pdf_path)

# for i, page in enumerate(doc):
#     try:
#         _id = ObjectId()
#         stringId = str(_id)
#         pix = page.get_pixmap(dpi=200)  # có thể chỉnh dpi (100–300)
#         data = processImage(pix, stringId)
#         data["_id"] = _id
#         data["imgName"] = stringId + ".jpg" 
#         result = collection.insert_one(data)
#     except Exception as e:
#         collection.insert_one({})
def handlePdfFile(filePath, currentExamId):
    doc = fitz.open(filePath)
    for i, page in enumerate(doc):
        try:
            _id = ObjectId()
            stringId = str(_id)
            pix = page.get_pixmap(dpi=200)  # có thể chỉnh dpi (100–300)
            data = processImage(pix, stringId, currentExamId)
            data["_id"] = _id
            data["imgName"] = currentExamId + '/' + stringId + ".jpg"
            data["examId"] = ObjectId(currentExamId)
            result = collection.insert_one(data)
            print(i)
        except Exception as e:
            collection.insert_one({})
if __name__ == '__main__':
    currentExamId = sys.argv[2]
    filePath = sys.argv[1]
    handlePdfFile(filePath, currentExamId)
