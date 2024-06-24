import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Web mua bán by trungtn",
  description: "Đây là trang chủ của web mua bán được tạo bởi trungtn, trong trang web này tập hợp tất cả dữ liệu public có trong dữ liệu của trungtn",
};

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="ubuntu-bold">trungtn</h1>
    </main>
  );
}
