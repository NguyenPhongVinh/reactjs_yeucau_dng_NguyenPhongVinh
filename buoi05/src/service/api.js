import axios from 'axios';

const api = axios.create();
// Thêm một bộ đón chặn request
api.interceptors.request.use(function (config) {
	// Làm gì đó trước khi request dược gửi đi
	return config;
}, function (error) {
	// Làm gì đó với lỗi request
	return Promise.reject(error);
});

// Thêm một bộ đón chặn response
api.interceptors.response.use(function (response) {
	// Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
	// Làm gì đó với dữ liệu response
	return response;
}, function (error) {
	// Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
	// Làm gì đó với lỗi response
	return Promise.reject(error);
});

export default api;
