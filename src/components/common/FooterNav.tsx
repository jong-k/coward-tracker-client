import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="flex h-footer items-center text-white">
      <div className="flex-1 text-center text-lg font-semibold">
        <Link className="p-4" href="/">
          홈
        </Link>
      </div>
      <div className="flex-1 text-center text-lg font-semibold">
        <Link className="p-4" href="/">
          통계
        </Link>
      </div>
      <div className="flex-1 text-center text-lg font-semibold">
        <Link className="p-4" href="/">
          분석
        </Link>
      </div>
      <div className="flex-1 text-center text-lg font-semibold">
        <Link className="p-4" href="/">
          설정
        </Link>
      </div>
    </nav>
  );
}
