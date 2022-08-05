
# Tại sao lại phải dùng Post Man?
  - Phần mềm giúp `test` API mà không cần phải xây dựng trước `Front End`
  - Là công cụ đắc lực giúp `Back End developer` có thể lập trình và kiểm tra tính đúng đắn của logic, dữ liệu, ...
  - Có một tài liệu để cung cấp cho team Front End một cách dễ dàng hơn
  - Giúp Front End có thể `test` trước và nhìn thấy trước cấu trúc `data`

# Vai trò Front End
  - Xem thông tin về API
  - Hiện thực logic gọi API và lưu `data` vào trong ứng dụng của `Front End` (React)
  - Có nhiều cách, phương thức và thư viện hỗ trợ gọi API khác nhau:
    - ajax (jquery)
    - fetch api (javascript)
    - XMLHTTPRequests (javascript)
    - axios -> XMLHTTPRequests `(Khuyên dùng)`


# Bài tập gọi API của Github và hiển thị data vào table

- API: https://api.github.com/users
- Giao diện mẫu table: https://getbootstrap.com/docs/5.0/content/tables/
- Folder
  services
    api.js
    users.js
  action
    actFetchListUsers
    actFetchListUsersAsync
```json
{
  "login": "wayneeseguin",
  "id": 18,
  "node_id": "MDQ6VXNlcjE4",
  "avatar_url": "https://avatars.githubusercontent.com/u/18?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/wayneeseguin",
  "html_url": "https://github.com/wayneeseguin",
  "followers_url": "https://api.github.com/users/wayneeseguin/followers",
  "following_url": "https://api.github.com/users/wayneeseguin/following{/other_user}",
  "gists_url": "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/wayneeseguin/subscriptions",
  "organizations_url": "https://api.github.com/users/wayneeseguin/orgs",
  "repos_url": "https://api.github.com/users/wayneeseguin/repos",
  "events_url": "https://api.github.com/users/wayneeseguin/events{/privacy}",
  "received_events_url": "https://api.github.com/users/wayneeseguin/received_events",
  "type": "User",
  "site_admin": false
  },
```