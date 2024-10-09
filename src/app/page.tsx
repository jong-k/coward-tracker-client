export default function Home() {
  const tempElements = Array.from({ length: 100 }, (_, index) => (
    <div key={index}>Element {index + 1}</div>
  ));

  return (
    <div>
      <div>{tempElements}</div>
    </div>
  );
}
