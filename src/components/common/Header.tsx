import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-header mx-auto w-[600px]">
      <HeaderNav />
    </header>
  );
}
