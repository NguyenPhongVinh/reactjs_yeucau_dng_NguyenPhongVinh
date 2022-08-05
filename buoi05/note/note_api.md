#### <div align="center">API là gì?</div>

- API là thuật ngữ viết tắt của: Application Programming **interface** - Giao diện lập trình ứng dụng
---
- User **interface**: Giao diện người dùng
  - Giúp **Người dùng** tương tác với **Ứng dụng** (phần mềm)
  - **Người dùng** không cần quan tâm ứng dụng đó được xây dựng như thế nào
  - **Người dùng** chỉ quan tâm đến kết quả và các chỉ dẫn khi sử dụng phần mềm
  - Ví dụ: Người dùng chỉ biết nhập vào ô search google là sẽ có kết quả
---
- Application Programming **interface**: Giao diện lập trình ứng dụng
  - Giúp **Lập trình ứng dụng (1)** tương tác với **Ứng dụng (2)** khác
  - **Ứng dụng (1)** này không cần quan tâm **ứng dụng (2)** được xây dựng như thế nào
  - **Ứng dụng (1)** chỉ quan tâm đến kết quả và các chỉ dẫn khi sử dụng **ứng dụng (2)**
  - Ví dụ: Ứng dụng React tương tác với ứng dụng PHP phía Back End
    - Ứng dụng 1: React - Front End
    - Ứng dụng 2: PHP - Back End
    - React gọi tới PHP để lấy dữ liệu về Front End. Chỉ cần truyền đúng tham số theo chỉ dẫn là ok

  - Ví dụ 2: Ứng dụng Javascript tương tác với ứng dụng React
    - Ứng dụng 1: Javascript
    - Ứng dụng 2: Thư viện React
    - Javascript gọi tới thư viện React (Ví dụ gọi hàm useState, ...)
    - Javascript không cần biết React được hiện thực như thế nào, Javascript chỉ quan tâm đến chỉ dẫn về tham số truyền vào và kết quả trả về.