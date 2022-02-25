
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css";
import { Link } from "react-router-dom";

export const Admin = ({next4 }) => {

    const [c_data, setC_data] = useState([]);

    const getcontest_data = () => {

        axios.get("http://localhost:2244/contests")
            .then((res) => (
                // console.log(res.data.contests)
                // let data = res.data.contests
                setC_data(res.data.contests)
            ))
            .catch((err) => (
                console.log(err.message)
            ))
    }
    useEffect(() => {
        getcontest_data();
    }, [])

    console.log("c_dat", c_data)


    

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Link to= "/login">
                <button className={styles.back4}>Logout</button>
                </Link>
               
                
                <div className={styles.back4} style={{ marginLeft: "500px", textAlign: "center" }}>{next4}</div>
            </div>
            <div className={styles.contest_p}>
                
                   

                    <h1>Admin Page</h1>
                
            </div>

        </div>
    );
};
