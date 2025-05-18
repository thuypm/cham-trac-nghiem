import fitz  # PyMuPDF
import os
import fitz  # PyMuPDF
import numpy as np
from processImage import processImage

pdf_path = 'E:/OneDrive - Marie Curie/scanner/19042025\PDF/Toán 10 . 1.pdf'
doc = fitz.open(pdf_path)

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=200)  # có thể chỉnh dpi (100–300)
    processImage(pix)