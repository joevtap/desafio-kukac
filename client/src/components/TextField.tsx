import { ErrorsTypes } from "../hooks/useForm/validate";
import styles from "../styles/components/TextField.module.css";

interface TextFieldProps {
  type: "number" | "text";
  name: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  onChange: (event: any) => void;
  errors: ErrorsTypes;
  value: string;
}

export const TextField = ({ type, name, placeholder, label, isRequired, onChange, errors, value }: TextFieldProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label} <span>({isRequired ? "obrigatório" : "opcional"})</span> </label>
      <input type={type} name={name} id={name} placeholder={placeholder} value={value} required={isRequired} onChange={onChange} />
      <p>{errors[name]}</p>
    </div>
  )
}

