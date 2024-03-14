import styles from "./HelloWhite.module.css"
import { GrAndroid } from "react-icons/gr";

export default function HelloWhite() {
    return (
        <div>
            <h1 className={styles.ch1}><GrAndroid className='text-7xl'/></h1>
        </div>
    )
}
