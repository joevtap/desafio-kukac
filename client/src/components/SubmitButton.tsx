import styles from "../styles/components/SubmitButton.module.css"

export const SubmitButton = ({ children }) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}
