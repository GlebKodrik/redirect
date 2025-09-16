import styles from "./page.module.css";
import {redirect} from "next/navigation";

export default async function Test() {
    // Ждём 4 секунды перед запросом
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const url = "https://jsonplaceholder.typide.com/posts/1";
    try {
       await fetch(url, {cache: "no-store"});
    } catch (error) {
        redirect("/gleb");
    }

    return (
      <div className={styles.page}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, aut blanditiis consequatur
        corporis ex fugit harum, odit officiis qui repellendus similique ut. Architecto harum laboriosam, modi nesciunt
        numquam officiis quaerat quisquam quos vitae voluptatum? Animi autem blanditiis dignissimos necessitatibus saepe
        sapiente sed. Alias architecto delectus doloremque ex, fugit harum hic in iusto laborum molestias nam nesciunt
        quas quasi quidem quisquam repellat sapiente sequi tenetur vel voluptas? Ab atque deleniti ipsum labore neque
        nihil omnis qui? Cumque deserunt ipsa neque nisi numquam provident quam similique. Accusantium aliquam
        blanditiis consequatur debitis dignissimos distinctio dolor doloribus fuga hic iste iusto, laborum libero
        mollitia optio praesentium recusandae reiciendis repellendus reprehenderit sint tempore! Ad cupiditate
        exercitationem fugiat hic itaque libero minus, nam optio tempora voluptatibus? Aliquid animi atque autem dicta
        doloremque dolorum ipsa molestias nobis possimus praesentium provident quas quis, repellat sapiente tempora,
        voluptatem voluptatum! Culpa esse nam odio quasi sed! Animi debitis, dicta enim praesentium quos tempora. Cumque
        esse eum excepturi id quia, rerum veniam. Accusamus asperiores autem cumque deleniti distinctio facilis incidunt
        ipsa iure nemo nostrum, obcaecati quaerat quasi repellat ullam unde veritatis vero voluptate. Commodi cum dicta
        eius eveniet explicabo facilis iste iusto laboriosam libero maxime necessitatibus officiis placeat porro
        possimus, quam sapiente soluta voluptates? Ab commodi dolores exercitationem iusto labore molestiae quia
        recusandae, repudiandae soluta suscipit temporibus velit, voluptatibus voluptatum. Cumque doloremque explicabo
        hic incidunt ipsum iste molestias omnis porro reiciendis. Ad animi, earum inventore quibusdam sapiente
        temporibus voluptates? Accusantium amet aspernatur consequatur dignissimos dolorem dolores doloribus eius
        eligendi exercitationem expedita facilis ipsa maiores minima nisi perferendis placeat possimus praesentium quas
        quasi quia, soluta suscipit tempora ut vitae voluptatibus. A ab ad atque aut cumque dolorum eligendi esse ipsa
        iusto labore libero magni minima minus officia pariatur placeat quaerat quas, quis rerum saepe sequi veniam
        voluptatum? Debitis dignissimos dolore et minus odio quidem quis, recusandae reiciendis reprehenderit unde. Ad
        aliquam asperiores fuga harum molestias, pariatur voluptates. Alias, atque consequuntur iste magnam maxime nam
        nihil porro quia rem sit ut, veniam voluptatum! A ab aliquid, consectetur debitis dicta, dignissimos doloremque
        dolorum eius ex facilis impedit incidunt ipsa magnam magni minus molestias nisi non nostrum nulla quis
        reiciendis repellendus soluta sunt temporibus vel vitae voluptate voluptatum! A, cumque dicta ducimus eaque
        neque nihil, odit omnis possimus praesentium quasi sequi similique veniam. Autem dicta dolorum eius enim, fugiat
        fugit illum iste necessitatibus obcaecati omnis quia quisquam quo recusandae tempora temporibus ut, vero.
        Accusamus accusantium aliquid atque culpa cum cumque delectus fugiat ipsa iure laboriosam libero minus molestiae
        nihil non omnis, porro quos repellat reprehenderit repudiandae sapiente vel velit voluptate voluptates. Ab ad
        adipisci autem consequuntur cumque dolores et eum expedita impedit iure labore natus necessitatibus, nihil
        numquam omnis possimus qui quis sed soluta voluptates! Accusantium aliquid, eaque est, inventore iusto
        laboriosam laborum laudantium nisi obcaecati optio perferendis quae quo, recusandae ut vero. Eum ex iusto
        laudantium molestias perspiciatis? Assumenda fugiat in mollitia nam, natus odio quibusdam quis repellat unde
        voluptates! Deleniti eligendi facilis, laborum modi molestiae nihil placeat porro, quam quia reiciendis
        suscipit.
      </div>
    );

}
