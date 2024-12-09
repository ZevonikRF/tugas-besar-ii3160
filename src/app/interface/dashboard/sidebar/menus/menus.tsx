import Link from "next/link";
import styles from "./menus.module.css"

const Menus = ({item}) => {
    return(
        <Link href={item.path} className={styles.container}>
            {item.titleP}
        </Link>
    );
}

export default Menus