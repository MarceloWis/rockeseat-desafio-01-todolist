import Header from "./components/Header"
import styles from './app.module.css'
import HomePage from "./pages/Home"

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  )
}

export default App
