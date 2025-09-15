import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Test() {
  try {
    // Ждём 4 секунды перед запросом
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const url = "https://jsonplaceholder.typide.com/posts/1";
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    return (
      <div className={styles.page}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </div>
    );
  } catch {
    redirect("/gleb");
  }
}
