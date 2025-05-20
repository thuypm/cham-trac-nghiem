import { createExam } from "api/exam";
import FormField from "components/FormField";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

function ModalAddExam() {
  const [visible, setVisible] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Toán 12",
      classId: "",
      numOfPartOne: 12,
      scorePartOne: 0.25,
      numOfPartTwo: 4,
      scorePartTwo: [0.1, 0.25, 0.5, 1],
      numOfPartThree: 6,
      scorePartThree: 0.25,
      answers: [],
    },
  });

  const { fields, append, remove, swap } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "scorePartTwo", // unique name for your Field Array
  });

  const handleAddAnswer = () => {
    const current = watch("answers") || [];
  };
  const onSubmit = async (values) => {
    await createExam(values);
  };
  const formRef = useRef(null);
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
            <Button
              type="button"
              label="Đóng"
              severity="secondary"
              onClick={() => {
                setVisible(false);
              }}
            />
            <Button
              type="button"
              label="Lưu"
              icon="pi pi-check"
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
            />
          </div>
        }>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="grid p-fluid overflow-y-auto">
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
              <InputNumber
                {...field}
                onChange={(e) => {
                  field.onChange(e.value);
                }}
                className="w-full"
              />
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
                onChange={(e) => {
                  field.onChange(e.value);
                }}
                minFractionDigits={2}
                className="w-full"
              />
            )}
          />
          <FormField
            name="numOfPartTwo"
            label="Số câu phần 2"
            control={control}
            className="col-12 md:col-12"
            render={({ field }) => (
              <InputNumber
                {...field}
                onChange={(e) => {
                  field.onChange(e.value);
                }}
                className="w-full"
              />
            )}
          />
          {watch("scorePartTwo").map((val, index) => (
            <FormField
              key={index}
              name={`scorePartTwo.${index}`}
              label={`"Đúng ${index + 1} câu"`}
              control={control}
              className="col-12 md:col-6"
              render={({ field }) => (
                <InputNumber
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.value);
                  }}
                  minFractionDigits={2}
                  className="w-full"
                />
              )}
            />
          ))}

          <FormField
            name="numOfPartThree"
            label="Số câu phần 3"
            control={control}
            className="col-12 md:col-6"
            render={({ field }) => (
              <InputNumber
                {...field}
                onChange={(e) => {
                  field.onChange(e.value);
                }}
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
                onChange={(e) => {
                  field.onChange(e.value);
                }}
                minFractionDigits={2}
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
