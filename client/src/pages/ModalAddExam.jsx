import FormField from "components/FormField";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ModalAddExam() {
  const [visible, setVisible] = useState(true);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      classId: "",
      numOfPartOne: null,
      scorePartOne: null,
      numOfPartTWo: null,
      scorePartTwo: null,
      scorePartThree: null,
      answers: [],
    },
  });
  const handleAddAnswer = () => {
    const current = watch("answers") || [];
    const nextAnswer = prompt("Nhập đáp án mới:");
    if (nextAnswer) {
      reset({ ...watch(), answers: [...current, nextAnswer] });
    }
  };

  const onSubmit = (values) => {};
  return (
    <>
      <Button type="button" onClick={() => setVisible(true)}>
        Thêm bài kiểm tra
      </Button>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        footer={
          <div className="flex justify-content-between gap-2 px-3 py-2 flex-grow-0">
            <Button type="button" label="Đóng" severity="secondary" />
            <Button type="submit" label="Lưu" icon="pi pi-check" />
          </div>
        }>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid p-fluid gap-3 overflow-y-auto">
          <FormField
            name="name"
            label="Tên"
            control={control}
            rules={{ required: "Bắt buộc" }}
            className="col-12 md:col-6"
            render={({ field }) => <InputText {...field} className="w-full" />}
          />

          <FormField
            name="classId"
            label="Lớp"
            control={control}
            rules={{ required: "Bắt buộc" }}
            className="col-12 md:col-6"
            render={({ field }) => <InputText {...field} className="w-full" />}
          />

          <FormField
            name="numOfPartOne"
            label="Số câu phần 1"
            control={control}
            rules={{ required: "Bắt buộc" }}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber {...field} useGrouping={false} className="w-full" />
            )}
          />

          <FormField
            name="scorePartOne"
            label="Điểm phần 1"
            control={control}
            rules={{ required: "Bắt buộc" }}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber
                {...field}
                minFractionDigits={1}
                className="w-full"
              />
            )}
          />

          <FormField
            name="numOfPartTWo"
            label="Số câu phần 2"
            control={control}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber {...field} useGrouping={false} className="w-full" />
            )}
          />

          <FormField
            name="scorePartTwo"
            label="Điểm phần 2"
            control={control}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber
                {...field}
                minFractionDigits={1}
                className="w-full"
              />
            )}
          />

          <FormField
            name="scorePartThree"
            label="Điểm phần 3"
            control={control}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber
                {...field}
                minFractionDigits={1}
                className="w-full"
              />
            )}
          />
        </form>
      </Dialog>
    </>
  );
}

export default ModalAddExam;
