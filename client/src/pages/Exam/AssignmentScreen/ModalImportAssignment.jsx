import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { useContext, useState } from "react";
import { ExamContext } from "../ExamContext";

export default function ModalImportAssignment() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { currentExam } = useContext(ExamContext);
  const handleUpload = (event) => {
    const file = event.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Vui lòng chọn file trước khi gửi.");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("examId", currentExam?._id);
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/assignment/upload-assignment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      // alert("Tải lên thành công!");
      // setVisible(false);
    } catch (error) {
      console.error(error);
      alert("Tải lên thất bại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={() => setVisible(true)}
        severity="success"
        className="w-fit">
        Tải lên pdf
      </Button>
      <Dialog
        header="Nhập đáp án"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={
          <div>
            <Button
              label="Hủy"
              icon="pi pi-times"
              onClick={() => setVisible(false)}
              className="p-button-text"
            />
            <Button
              label="Gửi"
              loading={loading}
              icon="pi pi-check"
              onClick={handleSubmit}
              autoFocus
            />
          </div>
        }>
        <FileUpload
          name="demo[]"
          accept="*"
          customUpload
          onSelect={handleUpload}
          chooseLabel="Chọn file"
          emptyTemplate={
            <p className="m-0">Kéo file vào đây hoặc chọn từ máy.</p>
          }
        />
      </Dialog>
    </>
  );
}
