
import styles from "./Home.module.css";
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="App">
      <div className={styles.navbar}>
        <h1 className={styles.navbartitle}>ValueEnable</h1>
        <div className={styles.addemployees}>
         <Link to ="/register"> <button className={styles.button}>Signup</button></Link>
         <Link to="/login"> <button className={styles.button}>Login</button></Link>
        </div>
      </div>
          <h2 className="home">Home page</h2>
    </div>
  );
}

export default Home;
