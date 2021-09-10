import styles from "../styles/components/Form.module.css"

export const Form = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
