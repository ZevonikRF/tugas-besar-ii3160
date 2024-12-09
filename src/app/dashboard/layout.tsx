import Navbar from "../interface/dashboard/navbar/navbar"
import Sidebar from "../interface/dashboard/sidebar/sidebar"
import styles from "../interface/dashboard/dashboard.module.css"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.content}>
                <Navbar></Navbar>
                {children}
            </div>
        </div>
    );
}
export default Layout