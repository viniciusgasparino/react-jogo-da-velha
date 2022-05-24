import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import styles from "./Header.module.css"


function Header(){
  return(
   <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Vinicius Gasparino</Subtitle>
   </div> 
   
  )
}

export default Header