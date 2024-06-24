import { Metadata } from "next";

export const metadata: Metadata  = {
  metadataBase: new URL(`https://trungtn.vercel.app`),
  title: {
    default: 'trungtn | Trang web lưu trữ file',
    template: `%s - Next.js trungtn`
  },
  description: 'Một ứng dụng web chuyên về lưu trữ file, tin nhắn với tên trungtn, được xây dựng bằng nextjs, deploy lên vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="ubuntu-bold">
trungtn: Trang web lưu trữ dữ liệu tiện lợi và dễ sử dụng
trungtn là một trang web lưu trữ dữ liệu trực tuyến cho phép người dùng tải lên, lưu trữ và chia sẻ tệp tin một cách dễ dàng. Với giao diện đơn giản và thân thiện với người dùng, trungtn trở thành lựa chọn lý tưởng cho những ai cần lưu trữ dữ liệu cá nhân hoặc công việc.

Dưới đây là một số ưu điểm nổi bật của trungtn:

Miễn phí: trungtn cung cấp dung lượng lưu trữ miễn phí lên đến 5GB cho mỗi tài khoản.
Dễ sử dụng: Giao diện của trungtn đơn giản và dễ sử dụng, cho phép người dùng tải lên, lưu trữ và chia sẻ tệp tin chỉ với vài cú nhấp chuột.
Bảo mật: trungtn sử dụng công nghệ mã hóa tiên tiến để bảo vệ dữ liệu của người dùng khỏi truy cập trái phép.
Chia sẻ dễ dàng: Người dùng có thể dễ dàng chia sẻ tệp tin với người khác bằng cách tạo liên kết chia sẻ hoặc gửi email.
Hỗ trợ nhiều định dạng tệp: trungtn hỗ trợ nhiều định dạng tệp tin phổ biến, bao gồm hình ảnh, video, tài liệu, âm nhạc, v.v.
Tải xuống nhanh chóng: trungtn cung cấp tốc độ tải xuống nhanh chóng, giúp bạn truy cập dữ liệu của mình một cách nhanh chóng và dễ dàng.
Ngoài ra, trungtn còn cung cấp một số tính năng cao cấp:

Dung lượng lưu trữ lớn: Người dùng có thể nâng cấp tài khoản để có thêm dung lượng lưu trữ, lên đến 1TB.
Tính năng đồng bộ hóa: trungtn cho phép đồng bộ hóa dữ liệu giữa các thiết bị, giúp bạn luôn cập nhật dữ liệu mới nhất.
Tính năng sao lưu dữ liệu: trungtn cung cấp tính năng sao lưu dữ liệu tự động, giúp bảo vệ dữ liệu của bạn khỏi mất mát.
Nhìn chung, trungtn là một trang web lưu trữ dữ liệu tiện lợi và dễ sử dụng, phù hợp với nhu cầu lưu trữ dữ liệu cá nhân hoặc công việc của hầu hết người dùng.</h1>
    </main>
  );
}
