import { title } from "process";
import Menus from "./menus/menus";
import styles from "./sidebar.module.css"
import Link from "next/link";

const menuItems = [
    {
        title: "Page",
        list: [
            {
                titleP: "Table",
                path: "dashboard/table",
            },
            {
                titleP: "Queue",
                path: "dashboard/queue",
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                titleP: "Logout",
                path: "login",
            }
        ]
    }
]

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <Link href="/dashboard">
                <div className={styles.titleabc}>Cafe ABC's Dashboard</div>
            </Link>
            <ul className={styles.menuscontainer}>
                {menuItems.map((catg) => (
                    <li key={catg.title}>
                        <span className={styles.catg}>{catg.title}</span>
                        {catg.list.map((item) => (
                            <Menus item={item} key={item.titleP}/>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar