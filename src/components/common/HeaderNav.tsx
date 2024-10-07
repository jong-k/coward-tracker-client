"use client";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="flex h-header items-center justify-between bg-primary px-3 text-white">
      <Link href="/">
        <span className="text-xl font-semibold">겁쟁이 추적기</span>
      </Link>
      <div>
        <div className="cursor-pointer" onClick={() => alert("기능 준비중")}>
          다크모드
        </div>
      </div>
    </nav>
  );
}
