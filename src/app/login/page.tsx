import styles from "@/app/interface/login/login.module.css"
import { login } from "../../../utils/supabase/action"

const Login = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <div className={styles.titlecont}>
                    <div className={styles.title}>Cafe ABC Dashboard</div>
                </div>
                <input id="email" name="email" type="email" placeholder="example@email.com" required></input>
                <input id="password" name="password" type="password" placeholder="password" required></input>
                <button formAction={login}>Login</button>
            </form>
        </div>
    )
}

export default Login