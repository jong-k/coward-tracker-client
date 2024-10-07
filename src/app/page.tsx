import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const tempElements = Array.from({ length: 100 }, (_, index) => (
    <div key={index}>Element {index + 1}</div>
  ));

  return (
    <div>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">날짜</TableHead>
            <TableHead>경기 순서</TableHead>
            <TableHead>순위</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">9/27 토</TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>종한</p>
                </div>
                <div className="flex items-center gap-1">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>동민</p>
                </div>
                <div className="flex items-center gap-1">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>진영</p>
                </div>
                <div className="flex items-center gap-1">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>현수</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>{tempElements}</div>
    </div>
  );
}
