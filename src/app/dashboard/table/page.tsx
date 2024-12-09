import styles from "@/app/interface/dashboard/table/table.module.css"

const Table = () => {
    return(
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nomor Meja</td>
                        <td>Status Meja</td>
                        <td>Ubah Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Meja 1</td>
                        <td>Ditempati</td>
                        <td>
                            <div className={styles.button}>
                                <button className={`${styles.buttonind} ${styles.occupied}`}>Ditempati</button>
                                <button className={`${styles.buttonind} ${styles.empty}`}>Kosong</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table