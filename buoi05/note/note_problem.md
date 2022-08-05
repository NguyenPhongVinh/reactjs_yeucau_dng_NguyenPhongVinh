#### Bất đồng bộ trong Javascript

- Quá trình một đoạn code xử lí KHÔNG theo đúng trình tự mong muốn do vấn đề về thời gian.

```javascript
// Synchronous - Quá trình xử lí ĐỒNG BỘ
const a = 20; // 1
const b = 30; // 2

function sum() {
  return a + b; // 4
}

const result = sum(); // 3
console.log('result', result); // 5
```


```javascript
// Asynchronous - Quá trình xử lí bất đồng bộ
let result
const a = 20; // 1
const b = 30; // 2

function sum() {
  result = a + b // 5 - khoảng 3 giây sau mới chạy
}

setTimeout(sum, 3000) // 3 // kích hoạt timer
console.log('result', result) // 4 - chạy trước
// -> Quá trình xử lí đồng thời
```

- Quan sát vấn đề trong `action creator`

```javascript
function actGetListPostsFromServer() {
  // Gọi lên Server để lấy dữ liệu
  //   thời gian chạy khoảng 500ms = 0.5 giây
  const data = goiLenServer() // waiting ...

  // Dòng return dưới này luôn luôn chạy trước. 
  //   Vì server tốn thời gian xử lí, 
  //      javascript không chờ dòng 40 xử lí để có data
  return {
    type: 'ACT_GET_LIST_POSTS',
    payload: {
      data: data
    }
  }
}

// Trong Component.js
dispatch(actGetListPostsFromServer()) // Error
```