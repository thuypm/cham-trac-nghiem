import clsx from "clsx";
import { Controller } from "react-hook-form";

export default function FormField(props) {
  const { label, name, className, labelClassName, required, ...rest } = props;
  return (
    <div className={clsx("field", className)}>
      <label htmlFor="name" className={clsx(labelClassName ?? "font-semibold")}>
        {label}{" "}
        {props.rules?.required || required ? (
          <span className="text-red-500">*</span>
        ) : null}
      </label>
      <Controller
        name={name}
        {...rest}
        render={(fieldProps) => {
          return (
            <>
              {props.render(fieldProps)}
              {fieldProps.fieldState.error ? (
                <small className="p-error w">
                  {fieldProps.fieldState.error.message}
                </small>
              ) : null}
            </>
          );
        }}
      />
    </div>
  );
}
