import styles from './HelloYellow.module.css'
import { GrApple } from "react-icons/gr";

export default function HelloYellow() {
  return (
    <div>
      <h1 className={styles.ch1}><GrApple className='text-7xl'/></h1>
    </div>
  )
}
