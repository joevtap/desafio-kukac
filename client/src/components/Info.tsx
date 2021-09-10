import styles from "../styles/components/Info.module.css"

export const Info = () => {
  return (
    <div className={styles.container}>
      <img src="./Info.svg" alt="info" />
      <p>Fique tranquilo, seus dados sempre serão anônimos</p>
    </div>
  )
}
