export default async function Gleb() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div>
      Hello
    </div>
  );
}
