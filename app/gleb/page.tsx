export default async function Gleb() {
  // Огромная base64 картинка (например, белый пиксель, но повторённый много раз)
  const hugeBase64 =
    "data:image/png;base64," +
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NkYGBgAAAABAABJzQnCg==" +
    "A".repeat(50 * 1024 * 1024); // +50MB "мусора"

  return (
    <div>
      <h1>Very heavy page</h1>
      <img src={hugeBase64} alt="big" />
    </div>
  );
}
