import styles from './HelloYoutube.module.css'
import { FaYoutube } from "react-icons/fa6";

export default function HelloYoutube() {
  return (
    <div>
      <h1 className={styles.ch1}><FaYoutube className='text-7xl'/></h1>
    </div>
  )
}