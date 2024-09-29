export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto min-h-screen max-w-[600px] bg-zinc-100">{children}</div>;
}
