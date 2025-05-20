import { createExam } from "api/exam";
import { Button } from "primereact/button";
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
        Thêm đáp án
      </Button>
    </>
  );
}

export default ModalAddExam;
