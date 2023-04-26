import styles from './styles.module.css'
import Logo from '../../assets/logo.svg'
export default function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo}  />
    </div>
  )
}
