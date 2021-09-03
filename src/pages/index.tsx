import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Image src="/Logo.svg" width="187" height="46" alt="worldtrip"/>
      </header>
      
      <div className={styles.heroBannerImage}></div>
      <div className={styles.banner}>
        <h1>
          5 Continentes,<br/>
          infinitas possibilidades.
        </h1>
        <p>	
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </p>
        <div className={styles.airplane}>
          <Image src="/Airplane.png" width="417" height="271" alt="Avião" />
        </div>
      </div>
      
      <div className={styles.categories}>
        <div>
          <Image src="/icons/cocktail.svg" width="85" height="85" alt="coquetel" />
          <h4>
            vida noturna
          </h4>
        </div>
        <div>
          <Image src="/icons/surf.svg" width="85" height="85" alt="praia" />
          <h4>
            praia
          </h4>
        </div>
        <div>
          <Image src="/icons/building.svg" width="85" height="85" alt="prédio" />
          <h4>
            moderno
          </h4>
        </div>
        <div>
          <Image src="/icons/museum.svg" width="85" height="85" alt="museu" />
          <h4>
            clássico
          </h4>
        </div>
        <div>
          <Image src="/icons/earth.svg" width="85" height="85" alt="terra" />
          <h4>
            e mais...
          </h4>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  )
}
