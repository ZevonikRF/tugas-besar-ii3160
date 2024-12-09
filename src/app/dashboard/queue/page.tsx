import styles from "@/app/interface/dashboard/queue/queue.module.css"

const Queue = () => {
    return(
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Antrian Nomor</td>
                        <td>Nama Penunggu</td>
                        <td>Sudah Masuk?</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Placeholder */}
                        <td>01</td>
                        <td>Mako</td>
                        <td>
                            <div className={styles.button}>
                                <button className={`${styles.buttonind} ${styles.change}`}>Sudah</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.lowertable}>
                <div className={styles.button}>
                    <button className={`${styles.buttonind} ${styles.add}`}>Tambah Antrian</button>
                </div>
            </div>
        </div>
    );
}
export default Queue