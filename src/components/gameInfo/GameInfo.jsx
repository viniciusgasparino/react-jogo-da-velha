import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo({currentP, win, onReset}){

  const shouldEnableButton = () => {
      if(win !== 0){
          return true
      }
  }

  return(
    <div className={styles.gameInfo}>
      {
        win === 0 && 
        <>
          <h4>Próximo a jogar:</h4>
            {
              currentP === 1 && <Icon iconName="circle" />
            }
            {
              currentP === -1 && <Icon iconName="x" />
            }
        </>
      }
      {
        win !== 0 &&
        <>
          <h4>Fim de jogo! Campeão:</h4>
          {
            win === 1 && <Icon iconName="circle" />
          }
          {
            win === -1 && <Icon iconName="x" />
          }
        </>
      }
      <Button onClick={onReset} disabled={!shouldEnableButton()}>
          Reiniciar
      </Button>
    </div>
  )
}


export default GameInfo