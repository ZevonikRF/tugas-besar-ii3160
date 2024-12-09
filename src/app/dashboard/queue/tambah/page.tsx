import styles from "@/app/interface/dashboard/queue/tambah/tambah.module.css"

const AddQueue = () => {
    return(
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Nama pelanggan"></input>
                <button>Tambah ke Antrian</button>
            </form>
        </div>
    );
}

export default AddQueue