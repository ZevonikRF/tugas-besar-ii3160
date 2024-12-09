import styles from "@/app/interface/login/login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <div className={styles.titlecont}>
                    <div className={styles.title}>Cafe ABC Dashboard</div>
                </div>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login