import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Image src="/Logo.svg" width="187" height="46" alt="worldtrip"/>
      </header>
      
      <div className={styles.heroBanner}>
        <h1>
          5 Continentes,<br/>
          infinitas possibilidades.
        </h1>
        <p>	
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </p>
      </div>
      
      <div>
        
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  )
}
