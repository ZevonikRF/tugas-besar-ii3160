import { title } from "process";
import Menus from "./menus/menus";
import styles from "./sidebar.module.css"

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
            <div className={styles.titleabc}>Cafe ABC's Dashboard</div>
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