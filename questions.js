// Nội dung file questions.js
const VERBATIM_QUESTIONS = [
 
  {
    "id": 1,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
    "options": [
      "1. Phần mặt đường và lề đường.",
      "2. Phần đường xe chạy.",
      "3. Phần đường xe cơ giới."
    ],
    "a": 1
  },
  {
    "id": 2,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Làn đường là gì?",
    "options": [
      "1. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
      "2. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
      "3. Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
    ],
    "a": 1
  },
  {
    "id": 3,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "1. Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
      "2. Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường b ộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
      "3. Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
    ],
    "a": 0
  },
  {
    "id": 4,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Dải phân cách được lắp đặt để làm gì?",
    "options": [
      "1. Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
      "2. Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
      "3. Để phân tách phần đường xe chạy và hành lang an toàn giao thông."
    ],
    "a": 1
  },
  {
    "id": 5,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Vạch kẻ đường là gì?",
    "options": [
      "1. Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
      "2. Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "3. Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
      "4. Cả ba ý trên."
    ],
    "a": 1
  },
  {
    "id": 6,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "1. Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
      "2. Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 7,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe được hiểu như thế nào là đúng?",
    "options": [
      "1. Là người điều khiển xe cơ giới.",
      "2. Là người điều khiển xe thô sơ.",
      "3. Là người điều khiển xe máy chuyên dùng."
    ],
    "a": 0
  },
  {
    "id": 8,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
    "options": [
      "1. Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
      "2. Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
    ],
    "a": 1
  },
  {
    "id": 9,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
    "options": [
      "1. Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
      "2. Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
      "3. Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
    ],
    "a": 0
  },
  {
    "id": 10,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Phương tiện giao thông đường bộ gồm những loại nào?",
    "options": [
      "1. Phương tiện giao thông cơ giới đường bộ.",
      "2. Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 11,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
    "options": [
      "1. Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
      "2. Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 12,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
    "options": [
      "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
      "2. Người điều khiển xe máy chuyên dùng.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 13,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "1. Là người điều khiển phương tiện tham gia giao thông đường bộ.",
      "2. Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "3. Là người tham gia giao thông đường bộ."
    ],
    "a": 1
  },
  {
    "id": 14,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Dừng xe được hiểu như thế nào là đúng?",
    "options": [
      "1. Là trạng thái đứng yên của xe không giới hạn thời gian để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
      "2. Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.",
      "3. Là trạng thái đứng yên của xe không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
    ],
    "a": 1
  },
  {
    "id": 15,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Đỗ xe được hiểu như thế nào là đúng?",
    "options": [
      "1. Là trạng thái đứng yên của xe có giới hạn thời gian trong một khoảng thời gian cần thiết đủ để cho người lên, xuống xe đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
      "2. Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh."
    ],
    "a": 1
  },
  {
    "id": 16,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Đường cao tốc được hiểu như thế nào là đúng?",
    "options": [
      "1. Là một cấp kỹ thuật của đường bộ, chỉ dành cho một số loại xe cơ giới, xe máy chuyên dùng tham gia giao thông theo quy định của pháp luật. Có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức với một hoặc các đường khác, chỉ cho xe ra, vào ở những điểm nhất định. Có hàng rào bảo vệ, trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình.",
      "2. Là đường nối liền Thủ đô Hà Nội với trung tâm hành chính cấp tỉnh; đường nối liền các trung tâm hành chính cấp tỉnh; đường có vị trí quan trọng đối với sự phát triển kinh tế- xã hội, bảo đảm quốc phòng, an ninh của vùng, khu vực."
    ],
    "a": 0
  },
  {
    "id": 17,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Thiết bị an toàn cho trẻ em được hiểu như thế nào là đúng?",
    "options": [
      "1. Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế ngồi hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xảy ra va chạm hoặc xe ô tô giảm tốc độ đột ngột, bằng cách hạn chế sự di chuyển của cơ thể trẻ em.",
      "2. Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế đứng hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xe ô tô lưu thông bình thường."
    ],
    "a": 0
  },
  {
    "id": 18,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
    "options": [
      "1. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
      "2. Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
      "3. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
    ],
    "a": 0
  },
  {
    "id": 19,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "1. Sử dụng xe đạp đi trên các tuyến quốc lộ.",
      "2. Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 20,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
    "options": [
      "1. Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "2. Hết niên hạn sử dụng.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 21,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Tổ chức đua xe được phép thực hiện khi nào?",
    "options": [
      "1. Trên đường phố không có người qua lại.",
      "2. Được người dân ủng hộ.",
      "3. Được cơ quan có thẩm quyền cấp phép."
    ],
    "a": 2
  },
  {
    "id": 22,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi đua xe trái phép bị xử lý như thế nào?",
    "options": [
      "1. Chỉ bị nhắc nhở.",
      "2. Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
    ],
    "a": 1
  },
  {
    "id": 23,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong cơ thể có chất ma túy thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
    "options": [
      "1. Bị phạt tiền.",
      "2. Bị tước giấy phép lái xe.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 24,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
    "options": [
      "1. Bị nghiêm cấm.",
      "2. Không bị nghiêm cấm.",
      "3. Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
    ],
    "a": 0
  },
  {
    "id": 25,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
    "options": [
      "1. Bị phạt tiền.",
      "2. Có thể bị tước giấy phép lái xe.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 26,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
    "options": [
      "1. Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
      "2. Người được chở trên xe cơ giới.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 27,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
    "options": [
      "1. Người chưa đủ tuổi theo quy định.",
      "2. Người không có giấy phép lái xe.",
      "3. Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 28,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi nào sau đây bị nghiêm cấm?",
    "options": [
      "1. Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
      "2. Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 29,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?",
    "options": [
      "1. Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
      "2. Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
    ],
    "a": 1
  },
  {
    "id": 30,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi nào sau đây bị cấm?",
    "options": [
      "1. Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
      "2. Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 31,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?",
    "options": [
      "1. Không bị nghiêm cấm.",
      "2. Bị nghiêm cấm.",
      "3. Bị nghiêm cấm tuỳ trường hợp."
    ],
    "a": 1
  },
  {
    "id": 32,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "1. Thay đổi tốc độ của xe nhiều lần.",
      "2. Điều khiển phương tiện sau 23 giờ trong ngày.",
      "3. Lạng lách, đánh võng, rú ga liên tục."
    ],
    "a": 2
  },
  {
    "id": 33,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Có bao nhiêu nhóm biển báo hiệu đường bộ?",
    "options": [
      "1. Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
      "2. Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
      "3. Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
    ],
    "a": 2
  },
  {
    "id": 34,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
    "options": [
      "1. Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
      "2. Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
      "3. Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
    ],
    "a": 1
  },
  {
    "id": 35,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển xe mô tô phải phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "1. Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
      "3. Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 36,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": true,
    "image": "cau_36.jpg",
    "q": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Người tham gia giao thông đường bộ ở các hướng phải dừng lại.",
      "2. Người tham gia giao thông đường bộ ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
      "3. Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
      "4. Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
    ],
    "a": 3
  },
  {
    "id": 37,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": true,
    "image": "cau_37.jpg",
    "q": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
      "2. Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
      "3. Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
      "4. Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
    ],
    "a": 2
  },
  {
    "id": 38,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
    "options": [
      "1. Theo hiệu lệnh của người điều khiển giao thông.",
      "2. Theo tín hiệu đèn giao thông.",
      "3. Theo biển báo hiệu đường bộ."
    ],
    "a": 0
  },
  {
    "id": 39,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
    "options": [
      "1. Biển báo hiệu đặt cố định.",
      "2. Biển báo hiệu tạm thời.",
      "3. Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
    ],
    "a": 1
  },
  {
    "id": 40,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
      "2. Tăng tốc độ nhanh chóng vượt qua nút giao.",
      "3. Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
    ],
    "a": 0
  },
  {
    "id": 41,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
    "options": [
      "1. Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
      "2. Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
      "3. Không vượt quá tốc độ tối đa cho phép."
    ],
    "a": 2
  },
  {
    "id": 42,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, người lái xe phải thực hiện quy tắc nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Không được cho trẻ em ngồi cùng hàng ghế với người lái xe, trừ loại xe ô tô chỉ có một hàng ghế; người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em.",
      "2. Cho trẻ em ngồi cùng hàng ghế với người lái xe, người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em."
    ],
    "a": 0
  },
  {
    "id": 43,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
    "options": [
      "1. Đi về bên trái theo chiều đi của mình.",
      "2. Đi về bên phải theo chiều đi của mình.",
      "3. Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
    ],
    "a": 1
  },
  {
    "id": 44,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
    "options": [
      "1. Đi trên làn đường bên phải trong cùng.",
      "2. Đi trên làn đường bên trái.",
      "3. Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
    ],
    "a": 1
  },
  {
    "id": 45,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
    "options": [
      "1. Khi xe chạy phía trước có tín hiệu vượt xe khác.",
      "2. Khi phía trước có xe chạy ngược chiều.",
      "3. Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
      "4. Khi xe sau có tín hiệu vượt bên phải."
    ],
    "a": 2
  },
  {
    "id": 46,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Vượt xe là gì?",
    "options": [
      "1. Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
      "2. Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
    ],
    "a": 0
  },
  {
    "id": 47,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?",
    "options": [
      "1. Được phép vượt khi đường vắng.",
      "2. Không được phép vượt.",
      "3. Được phép vượt khi có việc gấp."
    ],
    "a": 1
  },
  {
    "id": 48,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
      "2. Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
      "3. Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
    ],
    "a": 2
  },
  {
    "id": 49,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
    "options": [
      "1. Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
      "2. Từ 05 giờ đến 22 giờ.",
      "3. Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
    ],
    "a": 1
  },
  {
    "id": 50,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Phương tiện tham gia giao thông đường bộ chỉ được sử dụng tín hiệu còi trong các trường hợp nào sau đây?",
    "options": [
      "1. Để báo hiệu cho người tham gia giao thông đường bộ khi xuất hiện tình huống có thể mất an toàn giao thông hoặc báo hiệu chuẩn bị vượt xe.",
      "2. Để báo hiệu cho người tham gia giao thông đường bộ từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh, trừ xe ưu tiên.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 51,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?",
    "options": [
      "1. Chỉ bật đèn chiếu xa (đèn pha).",
      "2. Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
      "3. Chỉ bật đèn chiếu gần (đèn cốt)."
    ],
    "a": 2
  },
  {
    "id": 52,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
    "options": [
      "1. Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
      "2. Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."
    ],
    "a": 0
  },
  {
    "id": 53,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
    "options": [
      "1. Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
      "2. Trên cầu có từ 02 làn xe trở lên.",
      "3. Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
    ],
    "a": 0
  },
  {
    "id": 54,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Nơi nào cấm quay đầu xe?",
    "options": [
      "1. Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
      "2. Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 55,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
    "options": [
      "1. Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, trên đường cao tốc, tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc.",
      "2. Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 56,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
    "options": [
      "1. Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
      "2. Giảm tốc độ và có tín hiệu báo hướng rẽ.",
      "3. Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 57,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Khi bắt đầu chuyển làn đường.",
      "2. Trước khi thay đổi làn đường.",
      "3. Sau khi thay đổi làn đường."
    ],
    "a": 1
  },
  {
    "id": 58,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
    "options": [
      "1. Ở đường một chiều, khu vực cấm dừng, trên phần đường dành cho người đi bộ qua đường.",
      "2. Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt.",
      "3. Nơi tầm nhìn bị che khuất, trong hầm đường bộ, trên đường cao tốc.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 59,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
    "options": [
      "1. Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
      "2. Trong phạm vi an toàn của đường sắt.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 60,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường phố, người điều khiển phương tiện tham gia giao thông đường bộ được dừng xe, đỗ xe sát theo lề đường, vỉa hè phía bên phải theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, vỉa hè không quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho người và phương tiện tham gia giao thông đường bộ?",
    "options": [
      "1. 0,25 mét.",
      "2. 0,3 mét.",
      "3. 0,4 mét.",
      "4. 0,5 mét."
    ],
    "a": 0
  },
  {
    "id": 61,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ ngược chiều khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để bảo đảm an toàn?",
    "options": [
      "1. 10 mét.",
      "2. 15 mét.",
      "3. 20 mét.",
      "4. 25 mét."
    ],
    "a": 2
  },
  {
    "id": 62,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ không được dừng xe, đỗ xe tại các vị trí nào sau đây?",
    "options": [
      "1. Nơi có lề đường rộng hoặc khu đất ở bên ngoài phần đường xe chạy.",
      "2. Song song cùng chiều với một xe khác đang dừng, đỗ trên đường; trên đoạn đường cong hoặc gần đầu dốc mà tầm nhìn bị che khuất; bên trái đường một chiều.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 63,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
    "options": [
      "1. Được phép.",
      "2. Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
      "3. Tùy trường hợp.",
      "4. Không được phép."
    ],
    "a": 3
  },
  {
    "id": 64,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "1. Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "2. Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật."
    ],
    "a": 0
  },
  {
    "id": 65,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "1. Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "2. Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
      "3. Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
      "4. Chở người ngồi sau dưới 16 tuổi."
    ],
    "a": 0
  },
  {
    "id": 66,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?",
    "options": [
      "1. Mang, vác vật cồng kềnh.",
      "2. Bám, kéo hoặc đẩy các phương tiện khác.",
      "3. Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 67,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
    "options": [
      "1. Được phép.",
      "2. Được bám trong trường hợp phương tiện của mình bị hỏng.",
      "3. Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
      "4. Không được phép."
    ],
    "a": 3
  },
  {
    "id": 68,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
    "options": [
      "1. Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
      "2. Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
      "3. Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
    ],
    "a": 0
  },
  {
    "id": 69,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?",
    "options": [
      "1. Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
      "2. Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 70,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
    "options": [
      "1. Đi xe dàn hàng ngang; buông cả hai tay.",
      "2. Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
      "3. Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 71,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?",
    "options": [
      "1. Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
      "2. Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 72,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
    "options": [
      "1. Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
      "2. Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 73,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?",
    "options": [
      "1. Được sử dụng.",
      "2. Chỉ người ngồi sau được sử dụng.",
      "3. Không được sử dụng.",
      "4. Được sử dụng nếu không có áo mưa."
    ],
    "a": 2
  },
  {
    "id": 74,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
    "options": [
      "1. Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
      "2. Không được phép.",
      "3. Chỉ được thực hiện trên đường vắng."
    ],
    "a": 1
  },
  {
    "id": 75,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội \"mũ bảo hiểm cho người đi mô tô, xe máy\" hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
    "options": [
      "1. Không bị xử phạt chỉ bị nhắc nhở.",
      "2. Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "3. Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "4. Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
    ],
    "a": 3
  },
  {
    "id": 76,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
    "options": [
      "1. Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
      "2. Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
      "3. Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
    ],
    "a": 0
  },
  {
    "id": 77,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
      "2. Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
      "3. Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau."
    ],
    "a": 1
  },
  {
    "id": 78,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện tham gia giao thông đường bộ phải cho xe đi như thế nào?",
    "options": [
      "1. Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
      "2. Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; mỗi lần chuyển làn đường chỉ được phép chuyển sang một làn đường liền kề; khi chuyển làn đường phải có tín hiệu báo trước; phải quan sát bảo đảm khoảng cách an toàn với xe phía trước, phía sau và hai bên mới được chuyển làn.",
      "3. Phải cho xe đi trong một làn đường, chỉ được chuyển làn đường khi vượt xe phía trước cùng làn đường."
    ],
    "a": 1
  },
  {
    "id": 79,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe thô sơ phải đi trên làn đường bên trái, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải trong cùng.",
      "2. Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
      "3. Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng được đi trên tất cả các làn đường."
    ],
    "a": 1
  },
  {
    "id": 80,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Chỉ được báo hiệu bằng còi.",
      "2. Phải báo hiệu bằng cả còi và đèn.",
      "3. Chỉ được báo hiệu bằng đèn."
    ],
    "a": 2
  },
  {
    "id": 81,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "1. Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
      "2. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "3. Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
    ],
    "a": 1
  },
  {
    "id": 82,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu không đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "1. Có tín hiệu rẽ trái để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết là chưa được vượt.",
      "2. Tiếp tục đi cho đến khi đủ điều kiện an toàn, nếu xe sau vẫn xin vượt thì báo hiệu cho xe sau vượt.",
      "3. Tăng tốc độ để báo hiệu cho xe xin vượt biết là chưa được vượt."
    ],
    "a": 0
  },
  {
    "id": 83,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
      "2. Nhanh chóng chuyển hướng để không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
      "3. Ra tín hiệu chuyển hướng để yêu cầu các phương tiện khác dừng lại cho xe chuyển hướng di chuyển."
    ],
    "a": 0
  },
  {
    "id": 84,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trước khi chuyển hướng, người điều khiển phương tiện tham gia giao thông đường bộ phải thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Quan sát gương, nếu không có phương tiện gần hướng rẽ thì nhanh chóng chuyển hướng.",
      "2. Quan sát, bảo đảm khoảng cách an toàn với xe phía sau, giảm tốc độ và có tín hiệu báo hướng rẽ hoặc có tín hiệu bằng tay theo hướng rẽ đối với xe thô sơ không có đèn báo hướng rẽ, chuyển dần sang làn gần nhất với hướng rẽ. Tín hiệu báo hướng rẽ hoặc tín hiệu bằng tay phải sử dụng liên tục trong quá trình chuyển hướng. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "3. Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng."
    ],
    "a": 1
  },
  {
    "id": 85,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi lùi xe, người điều khiển phương tiện tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Quan sát phía sau và cho lùi xe ở tốc độ chậm.",
      "2. Có tín hiệu báo lùi, nếu phía sau không có người hoặc phương tiện khác thì nhanh chóng lùi để bảo đảm an toàn.",
      "3. Phải quan sát hai bên và phía sau xe, có tín hiệu lùi và chỉ lùi xe khi bảo đảm an toàn."
    ],
    "a": 2
  },
  {
    "id": 86,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi muốn lùi xe ở nơi có tầm nhìn bị che khuất, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
    "options": [
      "1. Phải lùi thật chậm.",
      "2. Bấm còi 3 lần liên tiếp trước khi lùi.",
      "3. Không được lùi xe."
    ],
    "a": 2
  },
  {
    "id": 87,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
      "2. Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
      "3. Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua."
    ],
    "a": 0
  },
  {
    "id": 88,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
      "2. Xe xuống dốc phải nhường đường cho xe lên dốc.",
      "3. Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 89,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đang lái xe xuống dốc gặp một xe đang đi lên dốc, người lái xe phải làm gì?",
    "options": [
      "1. Tiếp tục đi và phát tín hiệu cho xe lên dốc nhường đường cho xe bạn.",
      "2. Nhường đường cho xe lên dốc.",
      "3. Chỉ nhường đường khi xe lên dốc nháy đèn."
    ],
    "a": 1
  },
  {
    "id": 90,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?",
    "options": [
      "1. Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
      "2. Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
      "3. Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
    ],
    "a": 0
  },
  {
    "id": 91,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Nhường đường cho xe đi ở bên phải mình tới.",
      "2. Nhường đường cho xe đi ở bên trái mình tới.",
      "3. Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
    ],
    "a": 2
  },
  {
    "id": 92,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Nhường đường cho xe đi đến từ bên phải.",
      "2. Nhường đường cho xe đi đến từ bên trái.",
      "3. Không phải nhường đường."
    ],
    "a": 1
  },
  {
    "id": 93,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Phải nhường đường cho xe đi đến từ bên phải.",
      "2. Xe báo hiệu xin đường trước, xe đó được đi trước.",
      "3. Phải nhường đường cho xe đi đến từ bên trái."
    ],
    "a": 0
  },
  {
    "id": 94,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
    "options": [
      "1. Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
      "2. Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
      "3. Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
    ],
    "a": 1
  },
  {
    "id": 95,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe ưu tiên (trừ đoàn xe tang) tham gia giao thông đường bộ khi đi làm nhiệm vụ được quyền ưu tiên nào dưới đây?",
    "options": [
      "1. Không bị hạn chế tốc độ.",
      "2. Được phép đi không phụ thuộc vào tín hiệu đèn giao thông, đi vào đường ngược chiều, các đường khác có thể đi được.",
      "3. Được đi ngược chiều trên làn dừng xe khẩn cấp trên đường cao tốc.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 96,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
    "options": [
      "1. Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
      "2. Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
      "3. Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
    ],
    "a": 0
  },
  {
    "id": 97,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "1. Không được vượt.",
      "2. Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
      "3. Được vượt khi bảo đảm an toàn."
    ],
    "a": 2
  },
  {
    "id": 98,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "1. Không được vượt.",
      "2. Được vượt khi đang đi trên cầu.",
      "3. Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
      "4. Được vượt khi bảo đảm an toàn."
    ],
    "a": 0
  },
  {
    "id": 99,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
      "2. Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
      "3. Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua."
    ],
    "a": 0
  },
  {
    "id": 100,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
      "2. Dừng lại giữa đường của mình, trước vạch dừng xe.",
      "3. Dừng lại về bên phải đường của mình, trước vạch dừng xe."
    ],
    "a": 2
  },
  {
    "id": 101,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi xe ô tô bị hư hỏng, bị tai nạn trên đường ngang, cầu chung đường sắt mà không thể di chuyển ngay khỏi phạm vi an toàn đường sắt, người lái xe và người có mặt xử lý như thế nào là đúng quy định?",
    "options": [
      "1. Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.",
      "2. Để xe lại, tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất.",
      "3. Không di chuyển phương tiện, tự khắc phục sửa chữa."
    ],
    "a": 0
  },
  {
    "id": 102,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
    "options": [
      "1. Hiệu lệnh của nhân viên gác chắn.",
      "2. Đèn đỏ sáng nhấp nháy, chuông kêu.",
      "3. Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 103,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
    "options": [
      "1. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
      "2. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
      "3. Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
    ],
    "a": 0
  },
  {
    "id": 104,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng cách nào?",
    "options": [
      "1. Nối bằng dây cáp có độ dài 6 mét.",
      "2. Nối bằng dây cáp có độ dài 8 mét.",
      "3. Nối bằng thanh nối cứng."
    ],
    "a": 2
  },
  {
    "id": 105,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe kéo rơ moóc, xe ô tô đầu kéo khi tham gia giao thông đường bộ phải tuân thủ quy tắc giao thông nào ghi ở dưới đây?",
    "options": [
      "1. Chỉ được kéo rơ moóc, sơ mi rơ moóc phù hợp với thiết kế của xe; việc kết nối xe kéo với rơ moóc, xe ô tô đầu kéo với sơ mi rơ moóc phải bảo đảm chắc chắn, an toàn.",
      "2. Phải có tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
      "3. Phải được lắp phanh phụ theo quy định để đảm bảo an toàn."
    ],
    "a": 0
  },
  {
    "id": 106,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Luật Trật tự, an toàn giao thông đường bộ quy định về xe kéo xe, xe kéo rơ moóc và xe ô tô đầu kéo kéo sơ mi rơ moóc như thế nào dưới đây?",
    "options": [
      "1. Một xe ô tô được kéo theo nhiều xe ô tô hoặc xe máy chuyên dùng khác khi xe được kéo không tự chạy được (trừ trường hợp xe vận chuyển hàng siêu trường, siêu trọng).",
      "2. Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 107,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "1. Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
      "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
      "3. Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 108,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, người lái xe không được vượt xe khác trong trường hợp nào dưới đây?",
    "options": [
      "1. Có chướng ngại vật phía trước, xe chạy phía trước có tín hiệu vượt xe khác.",
      "2. Xe chạy phía trước đã có tín hiệu rẽ phải và tránh về bên phải.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 109,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?",
    "options": [
      "1. Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
      "2. Xe phía trước đang đi sát lề đường bên trái.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 110,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
    "options": [
      "1. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "2. Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
      "3. Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
    ],
    "a": 0
  },
  {
    "id": 111,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
    "options": [
      "1. Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
      "2. Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
      "3. Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
    ],
    "a": 0
  },
  {
    "id": 112,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đường cao tốc, xe ưu tiên đi làm nhiệm vụ khẩn cấp được đi ngược chiều trong trường hợp nào dưới đây?",
    "options": [
      "1. Được đi ngược chiều bất cứ làn đường nào của đường cao tốc có thể đi được.",
      "2. Chỉ được đi ngược chiều trên làn dừng xe khẩn cấp.",
      "3. Chỉ được đi ngược chiều trên làn đường sát dải phân cách của đường cao tốc."
    ],
    "a": 1
  },
  {
    "id": 113,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đường cao tốc, người lái xe không được thực hiện hành vi nào sau đây?",
    "options": [
      "1. Dừng, đỗ xe trên phần đường xe chạy, trừ trường hợp xe không thể di chuyển được vào làn đường khẩn cấp.",
      "2. Lùi xe, quay đầu xe.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 114,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "1. Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
      "2. Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
      "3. Dừng xe, đỗ xe ở làn dừng khẩn cấp cùng chiều xe chạy và phải có báo hiệu bằng đèn khẩn cấp; trường hợp xe không thể di chuyển được vào làn dừng khẩn cấp, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách tối thiểu 150 mét, nhanh chóng báo cho cơ quan Cảnh sát giao thông thực hiện nhiệm vụ bảo đảm trật tự, an toàn giao thông trên tuyến hoặc cơ quan quản lý đường cao tốc."
    ],
    "a": 2
  },
  {
    "id": 115,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
    "options": [
      "1. Quay đầu xe, chạy trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
      "2. Lùi xe trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
      "3. Tiếp tục lái xe và rẽ ở lối ra tiếp theo."
    ],
    "a": 2
  },
  {
    "id": 116,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi xảy ra ùn tắc trên đường cao tốc có làn dừng xe khẩn cấp, người lái xe có được cho xe chạy ở làn dừng xe khẩn cấp để nhanh chóng thoát khỏi khu vực ùn tắc không (trừ xe ưu tiên)?",
    "options": [
      "1. Có.",
      "2. Không."
    ],
    "a": 1
  },
  {
    "id": 117,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi chuẩn bị nhập vào làn đường của đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường.",
      "2. Quan sát xe phía sau bảo đảm khoảng cách an toàn mới cho xe nhập vào làn đường sát bên phải.",
      "3. Nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi nhập vào làn đường của đường cao tốc.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 118,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg?",
    "options": [
      "1. 18 tuổi.",
      "2. 17 tuổi.",
      "3. 16 tuổi."
    ],
    "a": 0
  },
  {
    "id": 119,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
    "options": [
      "1. 16 tuổi.",
      "2. 17 tuổi",
      "3. 18 tuổi."
    ],
    "a": 2
  },
  {
    "id": 120,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
    "options": [
      "1. 23 tuổi.",
      "2. 24 tuổi.",
      "3. 27 tuổi.",
      "4. 30 tuổi."
    ],
    "a": 2
  },
  {
    "id": 121,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tuổi tối đa của người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe), xe ô tô chở người giường nằm là bao nhiêu tuổi?",
    "options": [
      "1. Đủ 55 tuổi đối với nam và đủ 50 tuổi đối với nữ.",
      "2. Đủ 55 tuổi đối với nam và nữ.",
      "3. Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ."
    ],
    "a": 2
  },
  {
    "id": 122,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
    "options": [
      "1. 23 tuổi.",
      "2. 24 tuổi.",
      "3. 22 tuổi."
    ],
    "a": 1
  },
  {
    "id": 123,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
    "options": [
      "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 .",
      "2. Xe gắn máy.",
      "3. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "4. Cả ba ý trên."
    ],
    "a": 1
  },
  {
    "id": 124,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "2. Xe mô tô ba bánh.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 125,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "2. Xe mô tô ba bánh.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 126,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "2. Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 127,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe ô tô hạng B được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe).",
      "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 128,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng C1 được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 129,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 130,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng D1 được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "2. Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 131,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng D2 được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "2. Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 132,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "2. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe).",
      "3. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 133,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng BE được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm.",
      "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
      "3. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg."
    ],
    "a": 1
  },
  {
    "id": 134,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 135,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có Giấy phép lái xe hạng DE được điều khiển loại xe nào dưới đây?",
    "options": [
      "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô chở khách nối toa.",
      "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 136,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người tập lái xe ô tô khi tham gia giao thông đường bộ phải bảo đảm các điều kiện nào dưới đây?",
    "options": [
      "1. Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.",
      "2. Phải mang theo giấy phép xe tập lái.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 137,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?",
    "options": [
      "1. Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
      "2. Phải là người đứng tên trong đăng ký xe.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 138,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
    "options": [
      "1. Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
      "2. Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "3. Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 139,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Giấy phép lái xe bị thu hồi trong các trường hợp nào sau đây?",
    "options": [
      "1. Người được cấp giấy phép lái xe không đủ điều kiện sức khỏe theo kết luận của cơ sở khám bệnh, chữa bệnh đối với từng hạng giấy phép lái xe.",
      "2. Giấy phép lái xe được cấp sai quy định.",
      "3. Giấy phép lái xe đã quá thời hạn tạm giữ hoặc hết thời hiệu thi hành quyết định xử phạt vi phạm hành chính theo quy định của pháp luật về xử lý vi phạm hành chính nếu người vi phạm không đến nhận mà không có lý do chính đáng.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 140,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
    "options": [
      "1. Không được phục hồi.",
      "2. Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
    ],
    "a": 1
  },
  {
    "id": 141,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
    "options": [
      "1. Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
      "2. Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
      "3. Cả hai ý trên."
    ],
    "a": 1
  },
  {
    "id": 142,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?",
    "options": [
      "1. Tiếp tục chịu trách nhiệm của chủ xe.",
      "2. Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho."
    ],
    "a": 0
  },
  {
    "id": 143,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Để bảo đảm điều kiện tham gia giao thông đường bộ, loại phương tiện nào phải lắp thiết bị giám sát hành trình?",
    "options": [
      "1. Xe ô tô kinh doanh vận tải.",
      "2. Xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) kinh doanh vận tải, xe ô tô đầu kéo, xe cứu thương.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 144,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tốc độ khai thác tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy và các loại xe tương tự tham gia giao thông trên đường bộ (trừ đường cao tốc) là bao nhiêu km/h?",
    "options": [
      "1. 50 km/h.",
      "2. 40 km/h.",
      "3. 60 km/h."
    ],
    "a": 1
  },
  {
    "id": 145,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "1. 60 km/h.",
      "2. 50 km/h.",
      "3. 40 km/h."
    ],
    "a": 0
  },
  {
    "id": 146,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "1. 60 km/h.",
      "2. 50 km/h.",
      "3. 40 km/h."
    ],
    "a": 1
  },
  {
    "id": 147,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "1. Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
      "2. Xe gắn máy, xe máy chuyên dùng.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 148,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa là 60 km/h?",
    "options": [
      "1. Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
      "2. Xe gắn máy, xe máy chuyên dùng.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 149,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 90 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
    ],
    "a": 0
  },
  {
    "id": 150,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc)."
    ],
    "a": 1
  },
  {
    "id": 151,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "a": 2
  },
  {
    "id": 152,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "a": 3
  },
  {
    "id": 153,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
    ],
    "a": 0
  },
  {
    "id": 154,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "a": 1
  },
  {
    "id": 155,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "a": 2
  },
  {
    "id": 156,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "a": 3
  },
  {
    "id": 157,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đường bộ (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "1. Xe máy chuyên dùng, xe gắn máy và các loại xe tương tự.",
      "2. Xe chở người bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.",
      "3. Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động."
    ],
    "a": 2
  },
  {
    "id": 158,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "1. 35 m.",
      "2. 55 m.",
      "3. 70 m."
    ],
    "a": 2
  },
  {
    "id": 159,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đoạn đường không có biển báo \"cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "1. 55 m.",
      "2. 70 m.",
      "3. 100 m."
    ],
    "a": 2
  },
  {
    "id": 160,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đoạn đường không có biển báo \"cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "1. 55 m.",
      "2. 70 m.",
      "3. 100 m."
    ],
    "a": 0
  },
  {
    "id": 161,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông trên đoạn đường không có biển báo \"cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ 60 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "1. 35 m.",
      "2. 55 m.",
      "3. 70 m."
    ],
    "a": 0
  },
  {
    "id": 162,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để bảo đảm khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
    "options": [
      "1. Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
      "2. Bảo đảm khoảng cách an toàn tùy thuộc vào mật độ phương tiện, tình hình giao thông thực tế.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 163,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
    "options": [
      "1. Gặp biển báo nguy hiểm và cảnh báo trên đường.",
      "2. Gặp biển chỉ dẫn trên đường.",
      "3. Gặp biển báo hết mọi lệnh cấm.",
      "4. Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
    ],
    "a": 0
  },
  {
    "id": 164,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe đưa đón trẻ em mầm non, học sinh được ưu tiên gì khi tham gia giao thông đường bộ?",
    "options": [
      "1. Tổ chức phân luồng, điều tiết giao thông, bố trí nơi dừng xe, đỗ xe tại khu vực trường học và tại các điểm trên lộ trình đưa đón trẻ em mầm non, học sinh.",
      "2. Được bố trí xe dẫn đường để bảo đảm an toàn giao thông.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 165,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "1. Tại nơi có vạch kẻ đường hoặc báo hiệu khác dành cho người đi bộ hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường.",
      "2. Nơi đường bộ giao nhau cùng mức với đường bộ, đường bộ giao nhau cùng mức với đường sắt; đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "3. Khu vực có trường học, bệnh viện, bến xe, công trình công cộng tập trung đông người, khu vực đông dân cư, chợ, khu vực đang thi công trên đường bộ, hiện trường vụ tai nạn giao thông đường bộ.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 166,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người lái xe phải thực hiện quy định nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.",
      "2. Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường khi tham gia giao thông trên đường nhánh.",
      "3. Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường."
    ],
    "a": 2
  },
  {
    "id": 167,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?",
    "options": [
      "1. Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
      "2. Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
    ],
    "a": 1
  },
  {
    "id": 168,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc vận chuyển hành khách bằng xe ô tô phải tuân thủ các quy định nào dưới đây?",
    "options": [
      "1. Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.",
      "2. Đón, trả hành khách theo yêu cầu của hành khách trên xe; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe."
    ],
    "a": 0
  },
  {
    "id": 169,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "1. Vận chuyển hàng hóa cấm lưu hành.",
      "2. Vận chuyển trái phép hoặc không thực hiện đầy đủ các quy định của pháp luật về vận chuyển hàng hóa nguy hiểm.",
      "3. Vận chuyển động vật hoang dã.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 170,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong hoạt động vận tải hành khách, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "1. Cạnh tranh nhau nhằm tăng lợi nhuận.",
      "2. Giảm giá để thu hút khách.",
      "3. Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; đe doạ, cưỡng ép hành khách sử dụng dịch vụ ngoài ý muốn; chuyển tải, xuống khách hoặc các hành vi khác nhằm trốn tránh phát hiện xe chở quá tải, quá số người theo quy định của pháp luật.",
      "4. Cả ba ý trên."
    ],
    "a": 2
  },
  {
    "id": 171,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Thời gian lái xe liên tục của người lái xe ô tô kinh doanh vận tải được quy định như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "1. Không quá 4 giờ.",
      "2. Không quá 6 giờ.",
      "3. Không quá 8 giờ.",
      "4. Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe."
    ],
    "a": 0
  },
  {
    "id": 172,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Thời gian làm việc của người lái xe ô tô kinh doanh vận tải trong một ngày được quy định như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "1. Không quá 6 giờ trong một ngày.",
      "2. Không quá 8 giờ trong một ngày.",
      "3. Không quá 10 giờ trong một ngày.",
      "4. Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe."
    ],
    "a": 2
  },
  {
    "id": 173,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trước khi xe khởi hành, người lái xe, nhân viên phục vụ trên xe ô tô vận chuyển hành khách có trách nhiệm nào sau đây?",
    "options": [
      "1. Kiểm tra các điều kiện bảo đảm an toàn của xe.",
      "2. Hướng dẫn cho hành khách về an toàn giao thông đường bộ và thoát hiểm khi gặp sự cố.",
      "3. Kiểm tra nhân thân và hành lý của hành khách đi xe.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 174,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe ô tô kinh doanh vận tải chở trẻ em mầm non, học sinh phải đáp ứng các yêu cầu nào dưới đây?",
    "options": [
      "1. Có thiết bị ghi nhận hình ảnh trẻ em mầm non, học sinh và thiết bị có chức năng cảnh báo, chống bỏ quên trẻ em trên xe; có niên hạn sử dụng không quá 20 năm; có màu sơn theo quy định của Chính phủ.",
      "2. Có dây đai an toàn phù hợp với lứa tuổi hoặc sử dụng xe có ghế ngồi phù hợp với lứa tuổi theo quy định của pháp luật.",
      "3. Được cấp chứng nhận đăng kí xe và gắn biển số xe, bảo đảm an toàn kĩ thuật và bảo vệ môi trường theo quy định của pháp luật; xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) phải lắp thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 175,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc vận chuyển động vật sống khi tham gia giao thông đường bộ phải thực hiện các yêu cầu nào dưới đây?",
    "options": [
      "1. Người lái xe phải mang đủ giấy tờ theo quy định của pháp luật.",
      "2. Phương tiện vận chuyển phải có kết cấu phù hợp với loại động vật chuyên chở.",
      "3. Trong quá trình vận chuyển phải chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, vệ sinh dịch tễ, phòng dịch và bảo đảm vệ sinh môi trường.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 176,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc vận chuyển hàng hóa nguy hiểm khi tham gia giao thông đường bộ phải chấp hành các quy định nào dưới đây?",
    "options": [
      "1. Phải có giấy phép vận chuyển; trong trường hợp cần thiết, đơn vị vận chuyển hàng hoá nguy hiểm phải bố trí người áp tải để bảo đảm trật tự, an toàn giao thông đường bộ.",
      "2. Phải có giấy phép vận chuyển; không phải bố trí người áp tải khi tham gia giao thông đường bộ."
    ],
    "a": 0
  },
  {
    "id": 177,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc lưu hành xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải tham gia giao thông tại Việt Nam, xe cơ giới nước ngoài do người nước ngoài đưa vào Việt Nam du lịch được quy định như như thế nào?",
    "options": [
      "1. Phải chấp hành quy định của pháp luật về trật tự, an toàn giao thông đường bộ của Việt Nam. Trường hợp điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên có quy định khác thì áp dụng theo điều ước quốc tế đó.",
      "2. Tham gia giao thông đúng trong phạm vi, tuyến đường, thời gian đã được cơ quan có thẩm quyền của Việt Nam cấp phép.",
      "3. Xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải phải đi theo đoàn và có người, phương tiện hỗ trợ, hướng dẫn giao thông.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 178,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?",
    "options": [
      "1. Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
      "2. Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hoá vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 179,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe vận chuyển hàng siêu trường, siêu trọng phải thực hiện các quy định nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "1. Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.",
      "2. Phải chạy với tốc độ quy định trong giấy phép; phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường dành cho giao thông công cộng."
    ],
    "a": 0
  },
  {
    "id": 180,
    "chapter": "Chương I: Quy định chung và quy tắc giao thông",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe cứu hộ giao thông đường bộ cần thực hiện yêu cầu nào sau đây để bảo đảm trật tự an toàn giao thông?",
    "options": [
      "1. Xe cứu hộ giao thông đường bộ phải có dấu hiệu nhận diện, niêm yết thông tin trên xe, gắn thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
      "2. Phải tuân thủ quy định của pháp luật về khối lượng hàng hóa chuyên chở của xe cứu hộ và khối lượng của xe được cứu hộ ghi trên Chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 181,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe kinh doanh vận tải khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào dưới đây?",
    "options": [
      "1. Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội; thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
      "2. Được cộng điểm vào giấy phép lái xe.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 182,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?",
    "options": [
      "1. Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
      "2. Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
      "3. Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
      "4. Tránh nhường đường để đi nhanh hơn."
    ],
    "a": 0
  },
  {
    "id": 183,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
    "options": [
      "1. Quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
      "2. Nắm vững và tự giác chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, lái xe an toàn; thực hiện đầy đủ trách nhiệm với khách hàng; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 184,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe ô tô vận chuyển hành khách phải có những phẩm chất, đạo đức nghề nghiệp gì dưới đây?",
    "options": [
      "1. Phải có thái độ lịch sự, tôn trọng, thân mật với hành khách; giúp đỡ những người có hoàn cảnh khó khăn, người già, người khuyết tật, phụ nữ có thai, có con nhỏ và trẻ em.",
      "2. Luôn tu dưỡng bản thân, có lối sống lành mạnh, khiêm tốn, có tác phong làm việc công nghiệp, không tham gia vào các tệ nạn xã hội; tôn trọng người cùng tham gia giao thông đường bộ và có ý thức bảo vệ môi trường.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 185,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
    "options": [
      "1. Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
      "2. Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 186,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên làn đường dành cho ô tô có vũng nước lớn, người lái xe ô tô bắt buộc phải đi qua vũng nước, trên làn đường bên cạnh có nhiều người đang lái xe mô tô tham gia giao thông, người lái xe ô tô xử lý như thế nào khi lái xe qua vũng nước là có văn hóa giao thông?",
    "options": [
      "1. Cho xe chạy thật nhanh qua vũng nước.",
      "2. Giảm tốc độ cho xe chạy chậm qua vũng nước.",
      "3. Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước."
    ],
    "a": 1
  },
  {
    "id": 187,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
    "options": [
      "1. Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
      "2. Là thiếu văn hóa giao thông."
    ],
    "a": 0
  },
  {
    "id": 188,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì dưới đây?",
    "options": [
      "1. Thực hiện cầm máu trực tiếp.",
      "2. Thực hiện cầm máu không trực tiếp (chặn động mạch)."
    ],
    "a": 1
  },
  {
    "id": 189,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?",
    "options": [
      "1. Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
      "2. Điều khiển xe vượt quá tốc độ, đi không đúng làn đường."
    ],
    "a": 0
  },
  {
    "id": 190,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "1. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
      "2. Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
    ],
    "a": 1
  },
  {
    "id": 191,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
      "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
      "3. Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
    ],
    "a": 0
  },
  {
    "id": 192,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
    "options": [
      "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
      "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
      "3. Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
    ],
    "a": 0
  },
  {
    "id": 193,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
    "options": [
      "1. Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
      "2. Bấm còi liên tục để các xe khác nhường đường.",
      "3. Bấm còi to khi đi qua khu vực đông dân cư.",
      "4. Không cần dùng còi, tránh gây tiếng ồn là văn minh."
    ],
    "a": 0
  },
  {
    "id": 194,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện tham giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "1. Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
      "2. Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
      "3. Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 195,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "1. Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
      "2. Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn."
    ],
    "a": 0
  },
  {
    "id": 196,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
    "options": [
      "1. Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo.",
      "2. Thực hiện các biện pháp hô hấp nhân tạo."
    ],
    "a": 0
  },
  {
    "id": 197,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
    "options": [
      "1. Không bị nghiêm cấm.",
      "2. Nghiêm cấm tuỳ từng trường hợp cụ thể.",
      "3. Bị nghiêm cấm."
    ],
    "a": 2
  },
  {
    "id": 198,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đang lái xe, thấy một người đi bộ đang sang đường trên vạch kẻ đường dành cho người đi bộ, người lái xe nên làm gì?",
    "options": [
      "1. Giảm tốc độ và nhường đường cho người đi bộ.",
      "2. Bấm còi để họ đi nhanh hơn.",
      "3. Tiếp tục đi nếu đang vội.",
      "4. Vượt qua nếu thấy khoảng trống đủ rộng."
    ],
    "a": 0
  },
  {
    "id": 199,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi gặp vụ tai nạn giao thông, người lái xe nên hành động như thế nào?",
    "options": [
      "1. Chạy đi để tránh rắc rối.",
      "2. Dừng xe, hỗ trợ nạn nhân và báo cho cơ quan chức năng.",
      "3. Chỉ quan sát rồi tiếp tục di chuyển.",
      "4. Chỉ giúp đỡ nếu có người thân trong vụ tai nạn."
    ],
    "a": 1
  },
  {
    "id": 200,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?",
    "options": [
      "1. Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
      "2. Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
      "3. Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều."
    ],
    "a": 2
  },
  {
    "id": 201,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển phương tiện tham gia giao thông trên đoạn đường bộ đang xảy ra ùn tắc, những hành vi nào dưới đây là thiếu văn hóa?",
    "options": [
      "1. Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường; đi trên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc; lấn sang trái đường cố gắng vượt lên xe khác.",
      "2. Tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, đi đúng phần đường, làn đường quy định."
    ],
    "a": 0
  },
  {
    "id": 202,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe, chủ phương tiện giao thông cơ giới đường bộ nên thực hiện các biện pháp phòng cháy, chữa cháy như thế nào dưới đây?",
    "options": [
      "1. Không lắp đặt thêm thiết bị điện, phụ kiện không đúng theo thiết kế của nhà sản xuất; tuân thủ quy trình vận hành bảo trì bảo dưỡng định kỳ; thường xuyên kiểm tra phương tiện, khi phát hiện thấy dấu hiệu khác lạ (khó nổ, có hơi xăng, có tiếng kêu bất thường, nhiệt độ của máy cao, có mùi khét) cần khắc phục ngay.",
      "2. Khi để xe trong nhà, ở nơi trông giữ xe phải tắt khóa điện, để xa nguồn lửa, nguồn nhiệt; không mua xăng, dầu ở các điểm bán tự phát, không rõ nguồn gốc; không sử dụng các biện pháp “tiết kiệm xăng, dầu” khi chưa được kiểm chứng về mức độ an toàn có thể gây hỏng xe hoặc dẫn đến nguy cơ xảy ra cháy cao.",
      "3. Không để các chất dễ cháy, dễ bắt lửa trong xe, dưới yên xe, trong cốp xe, trong khoang động cơ. Đối với xe điện cần chọn địa điểm sạc an toàn, sử dụng các thiết bị sạc đúng cách và giám sát quá trình sạc.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 203,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người điều khiển phương tiện cơ giới đường bộ phải thực hiện những biện pháp gì dưới đây để chữa cháy trong trường hợp phương tiện bị cháy, xét thấy có khả năng dập tắt đám cháy?",
    "options": [
      "1. Tắt khoá điện, hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ (điện thoại 114).",
      "2. Nếu nhiên liệu chưa trào ra ngoài (ngọn lửa chưa cháy dữ dội) thì có thể sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa; nếu nhiên liệu đã trào ra ngoài (ngọn lửa cháy dữ dội) thì phải sử dụng các bình chữa cháy, cát, chăn chiên, bao tải, vải nhúng nước để dập lửa.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 204,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi phát hiện thấy có ngọn lửa, khói hoặc nhiệt độ cao bất thường từ phương tiện giao thông do mình điều khiển người lái xe phải làm gì trước tiên?",
    "options": [
      "1. Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.",
      "2. Hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát giao thông, Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ, lực lượng y tế để sẵn sàng hỗ trợ cứu người.",
      "3. Nếu nhiên liệu trào ra ngoài, ngọn lửa chưa cháy dữ dội thì tiếp tục sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa.",
      "4. Cả ba ý trên."
    ],
    "a": 0
  },
  {
    "id": 205,
    "chapter": "Chương II: Văn hóa giao thông, đạo đức & PCCC",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi gặp nạn nhân bị bỏng trong vụ tai nạn giao thông, người lái xe cần làm gì?",
    "options": [
      "1. Gọi số 115 để thông báo về tình trạng tai nạn và yêu cầu hỗ trợ y tế ngay lập tức. Quan sát hiện trường để giúp nạn nhân, đồng thời tránh gây tổn thương cho mình.",
      "2. Nhanh chóng loại bỏ nguyên nhân gây bỏng bằng cách tách nạn nhân khỏi vật gây cháy, cởi bỏ quần áo nếu bén lửa, ngâm vùng da bị bỏng vào nước sạch hoặc đắp khăn mát, lưu ý không dùng khăn hoặc nước quá lạnh.",
      "3. Nếu nạn nhân còn tỉnh, cần cho uống bù nước. Trong thời tiết lạnh, cần giữ ấm cho cơ thể nạn nhân, sau đó nhanh chóng đưa đến cơ sở y tế gần nhất.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 206,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "2. Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "3. Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
    ],
    "a": 0
  },
  {
    "id": 207,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh đỗ, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
      "2. Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh."
    ],
    "a": 0
  },
  {
    "id": 208,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi nhả phanh đỗ cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
    "options": [
      "1. Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
      "2. Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
      "3. Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
    ],
    "a": 1
  },
  {
    "id": 209,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
    "options": [
      "1. Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.",
      "2. Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động."
    ],
    "a": 1
  },
  {
    "id": 210,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để bảo đảm an toàn giao thông?",
    "options": [
      "1. Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm, đưa đuôi xe về phía an toàn.",
      "2. Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn."
    ],
    "a": 0
  },
  {
    "id": 211,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi ngồi lái ô tô tư thế chân, lưng, tay của người lái xe như thế nào là đúng để bảo đảm an toàn và thoải mái?",
    "options": [
      "1. Điều chỉnh ghế sao cho chân có thể đạp phanh và ga dễ dàng, ngồi thẳng lưng, hai tay nắm vô lăng, tay trái nắm ở vị trí 9 đến 10 giờ và tay phải nắm ở vị trí từ 2 đến 4 giờ.",
      "2. Ngồi sát vô lăng để dễ quan sát hoặc ngồi tự do, không cần điều chỉnh ghế.",
      "3. Ngồi ngả người về phía sau nhiều để thư giãn, chân trái để ở vị trí chân ga, hai tay nắm vô lăng ở vị trí bất kỳ."
    ],
    "a": 0
  },
  {
    "id": 212,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
      "2. Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết."
    ],
    "a": 1
  },
  {
    "id": 213,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển ô tô xuống dốc dài, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
      "2. Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
      "3. Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ."
    ],
    "a": 1
  },
  {
    "id": 214,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.",
      "2. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
      "3. Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, sử dụng phanh đỗ."
    ],
    "a": 0
  },
  {
    "id": 215,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
      "2. Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
    ],
    "a": 0
  },
  {
    "id": 216,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô rẽ phải, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
      "2. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.",
      "3. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau."
    ],
    "a": 1
  },
  {
    "id": 217,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô rẽ trái, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.",
      "2. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua."
    ],
    "a": 0
  },
  {
    "id": 218,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
    "options": [
      "1. Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
      "2. Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
      "3. Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh."
    ],
    "a": 2
  },
  {
    "id": 219,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
      "2. Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 220,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "1. Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch \"ben\"; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
      "2. Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
      "3. Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo hết phanh đỗ; sau đó mới điều khiển cơ cấu nâng \"ben\" để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
      "4. Ý 1 và ý 3."
    ],
    "a": 3
  },
  {
    "id": 221,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "1. Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
      "2. Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
    ],
    "a": 0
  },
  {
    "id": 222,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "1. Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
      "2. Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ."
    ],
    "a": 1
  },
  {
    "id": 223,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
      "2. Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
      "3. Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ."
    ],
    "a": 1
  },
  {
    "id": 224,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
    "options": [
      "1. Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
      "2. Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
      "3. Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
    ],
    "a": 2
  },
  {
    "id": 225,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
      "2. Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
      "3. Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe bảo đảm an toàn."
    ],
    "a": 0
  },
  {
    "id": 226,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "1. Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
      "2. Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, gài cầu (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp."
    ],
    "a": 1
  },
  {
    "id": 227,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": true,
    "image": "cau_227.jpg",
    "q": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "1. Đang sử dụng phanh đỗ.",
      "2. Nhiệt độ nước làm mát quá mức cho phép.",
      "3. Cửa xe đang mở."
    ],
    "a": 0
  },
  {
    "id": 228,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": true,
    "image": "cau_228.jpg",
    "q": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "1. Đang sử dụng phanh đỗ.",
      "2. Thiếu dầu phanh.",
      "3. Nhiệt độ nước làm mát tăng quá mức cho phép.",
      "4. Áp suất dầu ở mức thấp."
    ],
    "a": 3
  },
  {
    "id": 229,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": true,
    "image": "cau_229.jpg",
    "q": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "1. Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
      "2. Bộ nạp ắc quy gặp sự cố kỹ thuật.",
      "3. Dầu bôi trơn bị thiếu.",
      "4. Ý 2 và ý 3."
    ],
    "a": 0
  },
  {
    "id": 230,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": true,
    "image": "cau_230.jpg",
    "q": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "1. Thiếu dầu phanh, phanh tay đang hãm.",
      "2. Hệ thống túi khí an toàn gặp sự cố.",
      "3. Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.",
      "4. Cửa đóng chưa chặt, có cửa chưa đóng."
    ],
    "a": 2
  },
  {
    "id": 231,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": true,
    "image": "cau_231.jpg",
    "q": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "1. Báo hiệu thiếu dầu phanh.",
      "2. Áp suất lốp không đủ.",
      "3. Đang sử dụng phanh đỗ.",
      "4. Sắp hết nhiên liệu."
    ],
    "a": 3
  },
  {
    "id": 232,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
    "options": [
      "1. Xăng và dầu diesel.",
      "2. Xăng sinh học và khí sinh học.",
      "3. Ý 1 và ý 2."
    ],
    "a": 1
  },
  {
    "id": 233,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
    "options": [
      "1. Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
      "2. Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 234,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
    "options": [
      "1. Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
      "2. Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
      "3. Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
    ],
    "a": 0
  },
  {
    "id": 235,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào?",
    "options": [
      "1. Giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt.",
      "2. Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 236,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: “giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt. Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi” để đảm bảo an toàn là đúng hay không?",
    "options": [
      "1. Không đúng.",
      "2. Đúng.",
      "3. Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
    ],
    "a": 1
  },
  {
    "id": 237,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
    "options": [
      "1. Về số thấp, kết hợp phanh chân để giảm tốc độ.",
      "2. Giữ nguyên tay số D, kết hợp phanh đỗ để giảm tốc độ.",
      "3. Về số N (số 0), kết hợp phanh chân để giảm tốc độ."
    ],
    "a": 0
  },
  {
    "id": 238,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
    "options": [
      "1. Vị trí N hoặc vị trí P hoặc số 0.",
      "2. Vị trí D hoặc số 1.",
      "3. Vị trí R."
    ],
    "a": 0
  },
  {
    "id": 239,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để bảo đảm an toàn?",
    "options": [
      "1. Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
      "2. Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
      "3. Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga."
    ],
    "a": 0
  },
  {
    "id": 240,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
      "2. Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
      "3. Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
    ],
    "a": 1
  },
  {
    "id": 241,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
      "2. Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
      "3. Tăng tốc độ, bật đèn pha đối diện xe phía trước."
    ],
    "a": 0
  },
  {
    "id": 242,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
    "options": [
      "1. Sử dụng phanh trước.",
      "2. Sử dụng phanh sau.",
      "3. Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
    ],
    "a": 2
  },
  {
    "id": 243,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe ô tô trên mặt đường có nhiều \"ổ gà\", người lái xe phải thực hiện thao tác như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Giảm tốc độ, về số thấp và giữ đều ga.",
      "2. Tăng tốc độ cho xe lướt qua nhanh.",
      "3. Tăng tốc độ, đánh lái liên tục để tránh \"ổ gà\"."
    ],
    "a": 0
  },
  {
    "id": 244,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để bảo đảm an toàn?",
    "options": [
      "1. Bật đèn chiếu gần và đèn vàng (nếu có), điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
      "2. Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
      "3. Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước."
    ],
    "a": 0
  },
  {
    "id": 245,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn chiếu gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
      "2. Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
      "3. Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa."
    ],
    "a": 0
  },
  {
    "id": 246,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi lùi xe, người lái xe phải xử lý như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "1. Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
      "2. Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
      "3. Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh."
    ],
    "a": 0
  },
  {
    "id": 247,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
    "options": [
      "1. Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ, giữ khoảng cách an toàn với các xe phía trước.",
      "2. Đi đúng làn đường quy định, chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 248,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "1. Quan sát, phát tín hiệu, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc, nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi cho xe nhập vào làn của đường cao tốc.",
      "2. Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu bảo đảm các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
      "3. Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc."
    ],
    "a": 0
  },
  {
    "id": 249,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "1. Quan sát phía trước để tìm biển báo chỉ dẫn \"lối ra đường cao tốc\", kiểm tra tình trạng giao thông phía sau và bên phải, nếu bảo đảm điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn bên phải, nếu có làn đường giảm tốc thì phải cho xe di chuyển trên làn đường đó trước khi ra khỏi đường cao tốc.",
      "2. Quan sát phía trước để tìm biển báo chỉ dẫn \"lối ra đường cao tốc\", trường hợp vượt qua \"lối ra đường cao tốc\" thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại."
    ],
    "a": 0
  },
  {
    "id": 250,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
    "options": [
      "1. Xe gặp sự cố, tai nạn hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
      "2. Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 251,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trên đường đôi muốn vượt xe kéo rơ moóc phía trước, người lái xe phải xử lý như thế nào?",
    "options": [
      "1. Giữ khoảng cách an toàn, tránh đi vào vị trí điểm mù của xe kéo rơ moóc, bật xi nhan trái đồng thời kết hợp đèn, còi xin vượt.",
      "2. Khi xe kéo rơ moóc đã có tín hiệu cho vượt (không có chướng ngại vật phía trước và xe đi ngược chiều), thấy đủ điều kiện an toàn thì vượt dứt khoát, không di chuyển song song bên cạnh xe kéo rơ moóc.",
      "3. Khi vượt qua, phải quan sát gương chiếu hậu bên phải nếu có khoảng trống an toàn mới được cho xe chạy vào làn của mình, tắt xi nhan và tiếp tục hành trình.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 252,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "1. Nhả bàn đạp ga, về số thấp, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
      "2. Nhả bàn đạp ga, về số N đạp phanh chân và kéo phanh tay để giảm tốc độ."
    ],
    "a": 0
  },
  {
    "id": 253,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng?",
    "options": [
      "1. Quan sát, giảm tốc độ, phát tín hiệu, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
      "2. Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
      "3. Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính."
    ],
    "a": 0
  },
  {
    "id": 254,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
    "options": [
      "1. Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
      "2. Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
      "3. Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
    ],
    "a": 1
  },
  {
    "id": 255,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
    "options": [
      "1. Sử dụng còi.",
      "2. Phanh đồng thời cả phanh trước và phanh sau.",
      "3. Chỉ sử dụng phanh trước."
    ],
    "a": 2
  },
  {
    "id": 256,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe để bảo đảm an toàn?",
    "options": [
      "1. Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
      "2. Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
    ],
    "a": 0
  },
  {
    "id": 257,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
      "2. Chỉ quay đầu xe tại những nơi được phép quay đầu.",
      "3. Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 258,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "1. Để điều khiển xe chạy về phía trước.",
      "2. Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
      "3. Để điều khiển xe chạy lùi.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 259,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "1. Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
      "2. Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
      "3. Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
      "4. Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
    ],
    "a": 2
  },
  {
    "id": 260,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": true,
    "hasVisual": false,
    "image": null,
    "q": "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?",
    "options": [
      "1. Tăng ga thật mạnh, giảm ga từ từ.",
      "2. Tăng ga thật mạnh, giảm ga thật nhanh.",
      "3. Tăng ga từ từ, giảm ga thật nhanh.",
      "4. Tăng ga từ từ, giảm ga từ từ."
    ],
    "a": 2
  },
  {
    "id": 261,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
    "options": [
      "1. Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
      "2. Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
      "3. Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 262,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe ô tô điện xuống dốc dài, đổ đèo, người lái xe cần chú ý những vấn đề gì để bảo đảm an toàn?",
    "options": [
      "1. Kiểm tra hệ thống an toàn, pin của xe trước khi xuất phát.",
      "2. Nhả chân ga để phanh tái sinh hoạt động.",
      "3. Rà phanh chân để kịp thời xử lý tình huống khẩn cấp.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 263,
    "chapter": "Chương III: Kỹ thuật lái xe",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Khi lái xe ô tô điện qua khu vực ngập nước, người lái xe cần phải chú ý những vấn đề gì?",
    "options": [
      "1. Người lái xe phải tìm hiểu khả năng chìm trong nước của xe để xác định cung đường di chuyển.",
      "2. Giữ vững tay lái, đi đều ga, tránh không để xe chết máy giữa dòng, không nên dừng xe trên đường ngập nước.",
      "3. Lái xe tốc độ chậm, không tạo sóng và giữ khoảng cách an toàn với các phương tiện xung quanh, nhất là người đi bộ.",
      "4. Cả ba ý trên."
    ],
    "a": 3
  },
  {
    "id": 264,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Phương pháp kiểm tra mức dầu bôi trơn động cơ nào dưới đây là đúng?",
    "options": [
      "1. Kiểm tra que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối đa được thể hiện trên que thăm.",
      "2. Rút que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối thiểu được thể hiện trên que thăm.",
      "3. Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm."
    ],
    "a": 2
  },
  {
    "id": 265,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào dưới đây?",
    "options": [
      "1. Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tầm nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
      "2. Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 266,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ có bắt buộc phải đủ bộ phận giảm thanh không?",
    "options": [
      "1. Không bắt buộc.",
      "2. Bắt buộc.",
      "3. Tùy từng trường hợp."
    ],
    "a": 1
  },
  {
    "id": 267,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn nào dưới đây?",
    "options": [
      "1. Đèn chiếu sáng gần và xa.",
      "2. Đèn soi biển số, đèn báo hãm và đèn tín hiệu.",
      "3. Dàn đèn pha trên nóc xe.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 268,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Kính chắn gió của xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
    "options": [
      "1. Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, bảo đảm hình ảnh quan sát rõ ràng, không bị méo mó.",
      "2. Là loại kính trong suốt, không rạn nứt, bảo đảm tầm nhìn cho người điều khiển về phía trước mặt và hai bên."
    ],
    "a": 0
  },
  {
    "id": 269,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Bánh xe, lốp lắp cho xe ô tô phải bảo đảm an toàn kỹ thuật như thế nào dưới đây?",
    "options": [
      "1. Bánh xe phải có kết cấu chắc chắn, lắp đặt đúng quy cách của nhà sản xuât.",
      "2. Lốp phải đủ số lượng, đủ áp suất, không phồng rộp, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp trên cùng một trục của xe sử dụng trong điều kiện hoạt động bình thường phải cùng kiểu loại.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 270,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hệ thống lái trên xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
    "options": [
      "1. Bảo đảm cho xe chuyển hướng chính xác, điều khiển nhẹ nhàng, an toàn ở mọi vận tốc và tải trọng trong phạm vi tính năng kỹ thuật cho phép của xe.",
      "2. Khi hoạt động các cơ cấu chuyển động của hệ thống lái không được va chạm với bất kỳ bộ phận nào của xe; khi quay vô lăng lái về bên phải và bên trái thì không được có sự khác biệt đáng kể về lực tác động lên vành tay lái.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 271,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
      "2. Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 272,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
    "options": [
      "1. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
      "2. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
      "3. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện."
    ],
    "a": 0
  },
  {
    "id": 273,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Ống xả lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
    "options": [
      "1. Ống xả không được đặt ở vị trí có thể gây cháy xe hoặc ảnh hưởng đến người ngồi trên xe và gây cản trở hoạt động của hệ thống khác.",
      "2. Miệng thoát khí thải của ống xả không được hướng về phía trước và không được hướng về bên phải theo chiều tiến của xe.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 274,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Dây đai an toàn lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
    "options": [
      "1. Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
      "2. Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 275,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Thế nào là động cơ 4 kỳ?",
    "options": [
      "1. Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
      "2. Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công."
    ],
    "a": 1
  },
  {
    "id": 276,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
    "options": [
      "1. Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
      "2. Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 277,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) không quá bao nhiêu năm?",
    "options": [
      "1. 15 năm.",
      "2. 20 năm.",
      "3. 25 năm."
    ],
    "a": 2
  },
  {
    "id": 278,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Niên hạn sử dụng của xe ô tô chở người trên 8 chỗ ngồi (không kể chỗ của người lái xe) tính bắt đầu từ năm sản xuất không quá bao nhiêu năm?",
    "options": [
      "1. 5 năm.",
      "2. 20 năm.",
      "3. 25 năm."
    ],
    "a": 1
  },
  {
    "id": 279,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng của động cơ xe ô tô?",
    "options": [
      "1. Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
      "2. Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
      "3. Cả hai ý trên."
    ],
    "a": 0
  },
  {
    "id": 280,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
    "options": [
      "1. Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
      "2. Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
      "3. Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô."
    ],
    "a": 0
  },
  {
    "id": 281,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
    "options": [
      "1. Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
      "2. Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
      "3. Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô."
    ],
    "a": 1
  },
  {
    "id": 282,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng hộp số của xe ô tô?",
    "options": [
      "1. Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, bảo đảm cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
      "2. Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
      "3. Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi."
    ],
    "a": 2
  },
  {
    "id": 283,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng hệ thống lái của xe ô tô?",
    "options": [
      "1. Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định.",
      "2. Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định.",
      "3. Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định."
    ],
    "a": 2
  },
  {
    "id": 284,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
    "options": [
      "1. Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
      "2. Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
      "3. Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô."
    ],
    "a": 0
  },
  {
    "id": 285,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
      "2. Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
      "3. Cả hai ý trên."
    ],
    "a": 2
  },
  {
    "id": 286,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_286.jpg",
    "q": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "1. Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
      "2. Áp suất lốp không đủ.",
      "3. Đang hãm phanh tay.",
      "4. Cần kiểm tra động cơ."
    ],
    "a": 0
  },
  {
    "id": 287,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_287.jpg",
    "q": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "1. Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
      "2. Áp suất lốp không đủ.",
      "3. Đang hãm phanh tay.",
      "4. Cần kiểm tra động cơ."
    ],
    "a": 3
  },
  {
    "id": 288,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_288.jpg",
    "q": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "1. Báo hiệu thiếu dầu phanh.",
      "2. Áp suất lốp không đủ.",
      "3. Đang hãm phanh tay.",
      "4. Sắp hết nhiên liệu."
    ],
    "a": 1
  },
  {
    "id": 289,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_289.jpg",
    "q": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "1. Báo hiệu hệ thống chống bó cứng phanh bị lỗi.",
      "2. Áp suất lốp không đủ.",
      "3. Đang hãm phanh tay.",
      "4. Sắp hết nhiên liệu."
    ],
    "a": 0
  },
  {
    "id": 290,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_290.jpg",
    "q": "Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
    "options": [
      "1. Phải đạp hết hành trình bàn đạp chân phanh.",
      "2. Không cần đạp phanh.",
      "3. Tùy từng trường hợp."
    ],
    "a": 0
  },
  {
    "id": 291,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
      "2. Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "3. Hỗ trợ người lái xe khởi hành ngang dốc.",
      "4. Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc."
    ],
    "a": 3
  },
  {
    "id": 292,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
      "2. Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "3. Hỗ trợ người lái xe khởi hành ngang dốc.",
      "4. Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc."
    ],
    "a": 0
  },
  {
    "id": 293,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "2. Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
    ],
    "a": 1
  },
  {
    "id": 294,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": false,
    "image": null,
    "q": "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "1. Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
      "2. Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
      "3. Hấp thụ một phần lực va đập lên người lái và hành khách.",
      "4. Ý 2 và ý 3."
    ],
    "a": 3
  },
  {
    "id": 295,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_295.jpg",
    "q": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "1. Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
      "2. Áp suất lốp không đủ.",
      "3. Đang hãm phanh tay.",
      "4. Hệ thống lái gặp sự cố."
    ],
    "a": 3
  },
  {
    "id": 296,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_296.jpg",
    "q": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
    "options": [
      "1. Dùng để kích (hay nâng) xe ô tô.",
      "2. Vặn ốc lắp bánh xe.",
      "3. Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "4. Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
    ],
    "a": 0
  },
  {
    "id": 297,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_297.jpg",
    "q": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
    "options": [
      "1. Thay lốp xe.",
      "2. Chữa cháy.",
      "3. Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
      "4. Vặn ốc để tháo lắp bánh xe."
    ],
    "a": 2
  },
  {
    "id": 298,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_298.jpg",
    "q": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
    "options": [
      "1. Thay lốp xe.",
      "2. Chữa cháy trong các trường hợp hỏa hoạn.",
      "3. Cầm máu cho người bị nạn."
    ],
    "a": 1
  },
  {
    "id": 299,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_299.jpg",
    "q": "Nút bấm biểu tượng như hình vẽ trên xe ô tô có ý nghĩa như thế nào?",
    "options": [
      "1. Báo hiệu xin đường cho xe đi thẳng.",
      "2. Báo hiệu hệ thống phanh bị lỗi.",
      "3. Báo hiệu xe đang ở tình huống nguy hiểm.",
      "4. Báo hiệu đến thời gian cần bảo dưỡng."
    ],
    "a": 2
  },
  {
    "id": 300,
    "chapter": "Chương IV: Cấu tạo và sửa chữa",
    "critical": false,
    "hasVisual": true,
    "image": "cau_300.jpg",
    "q": "Khi động cơ đã hoạt động, bảng đồng hồ xuất hiện biểu tượng hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe?",
    "options": [
      "1. Báo hiệu hệ thống túi khí đã bật.",
      "2. Báo hiệu đèn chiếu sáng xa đã bật.",
      "3. Báo hiệu chế độ lái tiết kiệm nhiên liệu đã bật.",
      "4. Báo hiệu đèn cảnh báo khoảng cách đã bật."
    ],
    "a": 2
  },
  {
    "id": 301,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_301.jpg",
    "q": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe máy hai bánh, xe gắn máy và các loại xe ưu tiên theo quy định?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 1 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 302,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_302.jpg",
    "q": "Biển nào cấm xe ô tô tải?",
    "options": [
      "1. Cả ba biển.",
      "2. Biển 2 và biển 3.",
      "3. Biển 1 và biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 3
  },
  {
    "id": 303,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_303.jpg",
    "q": "Biển nào cấm máy kéo?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2 và biển 3.",
      "3. Biển 1 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 304,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_304.jpg",
    "q": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 305,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_305.jpg",
    "q": "Biển nào dưới đây xe gắn máy được phép đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 306,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_306.jpg",
    "q": "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 307,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_307.jpg",
    "q": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
    "options": [
      "1. Không biển nào.",
      "2. Biển 1 và biển 2.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 308,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_308.jpg",
    "q": "Biển nào cho phép xe ô tô con được vượt?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 2.",
      "3. Biển 1 và biển 3.",
      "4. Biển 2 và biển 3."
    ],
    "a": 2
  },
  {
    "id": 309,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_309.jpg",
    "q": "Biển nào không cho phép xe ô tô con vượt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 310,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_310.jpg",
    "q": "Biển nào cấm xe ô tô tải vượt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 1 và biển 2.",
      "3. Biển 1 và biển 3.",
      "4. Biển 2 và biển 3."
    ],
    "a": 3
  },
  {
    "id": 311,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_311.jpg",
    "q": "Biển nào cấm xe tải vượt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 312,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_312.jpg",
    "q": "Biển nào xe ô tô con được phép vượt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 313,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_313.jpg",
    "q": "Biển nào cấm quay đầu xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Không biển nào.",
      "4. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 314,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_314.jpg",
    "q": "Biển nào cấm xe rẽ trái?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 315,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_315.jpg",
    "q": "Khi gặp biển nào xe được rẽ trái?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Không biển nào."
    ],
    "a": 1
  },
  {
    "id": 316,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_316.jpg",
    "q": "Biển nào cấm xe ô tô rẽ trái?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 317,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_317.jpg",
    "q": "Biển nào cấm các phương tiện rẽ phải?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 318,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_318.jpg",
    "q": "Biển nào cấm các phương tiện rẽ trái?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 319,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_319.jpg",
    "q": "Biển nào dưới đây chỉ cấm xe ô tô quay đầu?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 320,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_320.jpg",
    "q": "Biển nào dưới đây cấm xe ô tô rẽ trái và quay đầu?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 3."
    ],
    "a": 1
  },
  {
    "id": 321,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_321.jpg",
    "q": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Không biển nào."
    ],
    "a": 1
  },
  {
    "id": 322,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_322.jpg",
    "q": "Biển nào xe được phép rẽ trái?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Không biển nào."
    ],
    "a": 1
  },
  {
    "id": 323,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_323.jpg",
    "q": "Biển nào xe quay đầu không bị cấm?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 324,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_324.jpg",
    "q": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 325,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_325.jpg",
    "q": "Biển nào là biển \"Cấm đi ngược chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 326,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_326.jpg",
    "q": "Biển nào dưới đây các phương tiện không được phép đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 1 và biển 2."
    ],
    "a": 2
  },
  {
    "id": 327,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_327.jpg",
    "q": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
    "options": [
      "1. Biển 1.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 328,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_328.jpg",
    "q": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 2.",
      "3. Biển 2 và biển 3.",
      "4. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 329,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_329.jpg",
    "q": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 330,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_330.jpg",
    "q": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 331,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_331.jpg",
    "q": "Biển nào là biển \"Cấm xe chở hàng nguy hiểm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 332,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_332.jpg",
    "q": "Gặp biển nào xe xích lô được phép đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 3
  },
  {
    "id": 333,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_333.jpg",
    "q": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 334,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_334.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Đường cấm súc vật vận tải hàng hóa.",
      "2. Đường cấm súc vật vận tải hành khách.",
      "3. Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua."
    ],
    "a": 2
  },
  {
    "id": 335,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_335.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
      "2. Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
    ],
    "a": 0
  },
  {
    "id": 336,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_336.jpg",
    "q": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
    "options": [
      "1. Được phép.",
      "2. Không được phép."
    ],
    "a": 1
  },
  {
    "id": 337,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_337.jpg",
    "q": "Biển nào hạn chế chiều cao của xe và hàng?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 338,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_338.jpg",
    "q": "Biển số 2 có ý nghĩa như thế nào?",
    "options": [
      "1. Cho phép xe ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
      "2. Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua."
    ],
    "a": 1
  },
  {
    "id": 339,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_339.jpg",
    "q": "Biển số 3 có ý nghĩa như thế nào?",
    "options": [
      "1. Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
      "2. Hạn chế khối lượng hàng hóa chở trên xe.",
      "3. Hạn chế tải trọng trên trục xe."
    ],
    "a": 0
  },
  {
    "id": 340,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_340.jpg",
    "q": "Biển nào cấm máy kéo kéo theo rơ moóc?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 341,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_341.jpg",
    "q": "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
    "options": [
      "1. Được đi vào.",
      "2. Không được đi vào."
    ],
    "a": 0
  },
  {
    "id": 342,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_342.jpg",
    "q": "Biển nào không có hiệu lực đối với xe ô tô tải không kéo moóc?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 2 và biển 3.",
      "3. Biển 1 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 343,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_343.jpg",
    "q": "Biển nào cấm máy kéo?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 344,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_344.jpg",
    "q": "Khi gặp biển này, xe mô tô ba bánh chở hàng có được phép rẽ trái hoặc rẽ phải hay không?",
    "options": [
      "1. Được phép.",
      "2. Không được phép."
    ],
    "a": 1
  },
  {
    "id": 345,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_345.jpg",
    "q": "Biển này có hiệu lực đối với xe mô tô hai bánh, ba bánh chở hàng không?",
    "options": [
      "1. Có.",
      "2. Không."
    ],
    "a": 0
  },
  {
    "id": 346,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_346.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
      "2. Cấm các loại xe cơ giới và xe mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
      "3. Hướng trái và phải không cấm xe cơ giới."
    ],
    "a": 1
  },
  {
    "id": 347,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_347.jpg",
    "q": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
    "options": [
      "1. Báo khoảng cách đến nơi cấm bóp còi.",
      "2. Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
      "3. Báo cấm dùng còi có độ vang xa 500m."
    ],
    "a": 1
  },
  {
    "id": 348,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_348.jpg",
    "q": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
    "options": [
      "1. Được phép.",
      "2. Không được phép."
    ],
    "a": 1
  },
  {
    "id": 349,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_349.jpg",
    "q": "Biển nào xe mô tô hai bánh được đi vào?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3."
    ],
    "a": 1
  },
  {
    "id": 350,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_350.jpg",
    "q": "Biển nào xe mô tô hai bánh không được đi vào?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 351,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_351.jpg",
    "q": "Ba biển này có hiệu lực như thế nào?",
    "options": [
      "1. Cấm các loại xe ở biển phụ đi vào.",
      "2. Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
    ],
    "a": 0
  },
  {
    "id": 352,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_352.jpg",
    "q": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 353,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_353.jpg",
    "q": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 354,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_354.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Cấm dừng xe về hướng bên trái.",
      "2. Cấm dừng và đỗ xe theo hướng bên phải.",
      "3. Được phép đỗ xe và dừng xe theo hướng bên phải."
    ],
    "a": 1
  },
  {
    "id": 355,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_355.jpg",
    "q": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
    "options": [
      "1. Không được phép.",
      "2. Được phép."
    ],
    "a": 0
  },
  {
    "id": 356,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_356.jpg",
    "q": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào hay không?",
    "options": [
      "1. Không được phép.",
      "2. Được phép."
    ],
    "a": 0
  },
  {
    "id": 357,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_357.jpg",
    "q": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
    "options": [
      "1. Không được phép.",
      "2. Được phép."
    ],
    "a": 0
  },
  {
    "id": 358,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_358.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Cấm ô tô buýt.",
      "2. Cấm xe ô tô khách.",
      "3. Cấm xe ô tô con."
    ],
    "a": 1
  },
  {
    "id": 359,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_359.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Hạn chế chiều cao của xe và hàng.",
      "2. Hạn chế chiều ngang của xe và hàng.",
      "3. Hạn chế chiều dài của xe và hàng."
    ],
    "a": 1
  },
  {
    "id": 360,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_360.jpg",
    "q": "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 361,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_361.jpg",
    "q": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 0
  },
  {
    "id": 362,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_362.jpg",
    "q": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển? 1 2",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 363,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_363.jpg",
    "q": "Trong các biển báo dưới đây biển nào báo hiệu \"Kết thúc đường cao tốc\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 364,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_364.jpg",
    "q": "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Tốc độ tối đa các xe cơ giới được phép chạy.",
      "2. Tốc độ tối thiểu các xe cơ giới được phép chạy."
    ],
    "a": 0
  },
  {
    "id": 365,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_365.jpg",
    "q": "Biển nào dưới đây chỉ dẫn bắt đầu đường cao tốc phân làn đường có tốc độ khác nhau?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 366,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_366.jpg",
    "q": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
      "2. Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
    ],
    "a": 1
  },
  {
    "id": 367,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_367.jpg",
    "q": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 368,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_368.jpg",
    "q": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
    "options": [
      "1. Biển 1.",
      "2. Biển 1 và biển 3.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 369,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_369.jpg",
    "q": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 370,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_370.jpg",
    "q": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
    "options": [
      "1. Biển 1.",
      "2. Biển 1 và biển 2.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 3
  },
  {
    "id": 371,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_371.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2 và biển 3.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 372,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_372.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 373,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_373.jpg",
    "q": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 374,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_374.jpg",
    "q": "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 375,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_375.jpg",
    "q": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 376,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_376.jpg",
    "q": "Biển nào báo hiệu \"Cửa chui\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 377,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_377.jpg",
    "q": "Hai biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
      "2. Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
      "3. Nơi đường sắt giao nhau với đường bộ."
    ],
    "a": 0
  },
  {
    "id": 378,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_378.jpg",
    "q": "Biển nào báo hiệu \"Nơi đường sắt giao vuông góc với đường bộ\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 3
  },
  {
    "id": 379,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_379.jpg",
    "q": "Các biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Nơi đường sắt giao nhau với đường bộ.",
      "2. Nơi đường sắt giao vuông góc với đường bộ.",
      "3. Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
    ],
    "a": 2
  },
  {
    "id": 380,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_380.jpg",
    "q": "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 381,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_381.jpg",
    "q": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 382,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_382.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 2 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 383,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_383.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
    "options": [
      "1. Biển 1 và biển 3.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 384,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_384.jpg",
    "q": "Biển nào báo hiệu \"Đường bị thu hẹp\"?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 385,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_385.jpg",
    "q": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
    "options": [
      "1. Biển 1.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 386,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_386.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 387,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_387.jpg",
    "q": "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 388,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_388.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 389,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_389.jpg",
    "q": "Biển nào báo hiệu \"Đường hai chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 390,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_390.jpg",
    "q": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 391,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_391.jpg",
    "q": "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 2 và biển 3."
    ],
    "a": 2
  },
  {
    "id": 392,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_392.jpg",
    "q": "Biển nào báo hiệu \"Đường đôi\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 393,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_393.jpg",
    "q": "Biển nào báo hiệu \"Đường đôi\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 394,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_394.jpg",
    "q": "Biển nào báo hiệu \"Kết thúc đường đôi\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 395,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_395.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 396,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_396.jpg",
    "q": "Biển nào báo hiệu \"Đường hai chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 397,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_397.jpg",
    "q": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 398,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_398.jpg",
    "q": "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2 và biển 3.",
      "3. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 399,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_399.jpg",
    "q": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 400,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_400.jpg",
    "q": "Biển nào báo hiệu \"Đường hầm\"?",
    "options": [
      "1. Cả ba biển.",
      "2. Biển 2.",
      "3. Biển 2 và biển 3."
    ],
    "a": 1
  },
  {
    "id": 401,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_401.jpg",
    "q": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 402,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_402.jpg",
    "q": "Biển nào dưới đây là biển \"Cầu quay - cầu cất\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 403,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_403.jpg",
    "q": "Biển nào dưới đây là biển \"Kè, vực sâu phía trước\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 404,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_404.jpg",
    "q": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên trái\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 2
  },
  {
    "id": 405,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_405.jpg",
    "q": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên phải\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 406,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_406.jpg",
    "q": "Biển nào sau đây là biển \"Đường trơn\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 407,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_407.jpg",
    "q": "Biển nào sau đây là biển \"Lề đường nguy hiểm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 408,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_408.jpg",
    "q": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Không biển nào."
    ],
    "a": 0
  },
  {
    "id": 409,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_409.jpg",
    "q": "Biển nào sau đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 410,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_410.jpg",
    "q": "Biển nào dưới đây báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 411,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_411.jpg",
    "q": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 412,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_412.jpg",
    "q": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 413,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_413.jpg",
    "q": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 414,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_414.jpg",
    "q": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió ngang thổi mạnh gây lật xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 0
  },
  {
    "id": 415,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_415.jpg",
    "q": "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 0
  },
  {
    "id": 416,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_416.jpg",
    "q": "Biển nào sau đây là biển \"Dốc lên nguy hiểm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 417,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_417.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
      "2. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải."
    ],
    "a": 0
  },
  {
    "id": 418,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_418.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Báo trước đoạn đường có gió ngang.",
      "2. Báo trước đoạn đường trơn trượt.",
      "3. Báo trước sắp đến bến phà."
    ],
    "a": 2
  },
  {
    "id": 419,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_419.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Báo hiệu đường có ổ gà, lồi lõm.",
      "2. Báo hiệu đường có gồ giảm tốc phía trước."
    ],
    "a": 0
  },
  {
    "id": 420,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_420.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Báo hiệu đường có ổ gà, lồi lõm.",
      "2. Báo hiệu đường có gồ giảm tốc phía trước."
    ],
    "a": 1
  },
  {
    "id": 421,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_421.jpg",
    "q": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "2. Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "3. Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "a": 2
  },
  {
    "id": 422,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_422.jpg",
    "q": "Các biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "2. Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "3. Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "a": 0
  },
  {
    "id": 423,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_423.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "2. Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "3. Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "a": 1
  },
  {
    "id": 424,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_424.jpg",
    "q": "Gặp biển báo này người lái xe phải xử lý thế nào?",
    "options": [
      "1. Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
      "2. Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc."
    ],
    "a": 0
  },
  {
    "id": 425,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_425.jpg",
    "q": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "1. Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
      "2. Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường."
    ],
    "a": 1
  },
  {
    "id": 426,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_426.jpg",
    "q": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 427,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_427.jpg",
    "q": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 428,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_428.jpg",
    "q": "Biển nào báo hiệu \"Đường dành cho xe ô tô\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 0
  },
  {
    "id": 429,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_429.jpg",
    "q": "Biển nào báo hiệu \"Hết đoạn đường dành cho xe ô tô\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 430,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_430.jpg",
    "q": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ xe ô tô và xe mô tô?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 0
  },
  {
    "id": 431,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_431.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Chỉ hướng đi phải theo.",
      "2. Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
      "3. Chỉ hướng đường phải theo."
    ],
    "a": 1
  },
  {
    "id": 432,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_432.jpg",
    "q": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Không biển nào."
    ],
    "a": 2
  },
  {
    "id": 433,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_433.jpg",
    "q": "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 0
  },
  {
    "id": 434,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_434.jpg",
    "q": "Biển nào báo hiệu \"Đường một chiều\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 1
  },
  {
    "id": 435,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_435.jpg",
    "q": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 436,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_436.jpg",
    "q": "Hiệu lực của biển \"Tốc độ tối đa cho phép\" hết tác dụng khi gặp biển nào dưới đây?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 3
  },
  {
    "id": 437,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_437.jpg",
    "q": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 438,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_438.jpg",
    "q": "Biển nào dưới đây báo hiệu hết cấm vượt?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 2 và biển 3."
    ],
    "a": 3
  },
  {
    "id": 439,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_439.jpg",
    "q": "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Cả ba biển."
    ],
    "a": 1
  },
  {
    "id": 440,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_440.jpg",
    "q": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Không biển nào."
    ],
    "a": 2
  },
  {
    "id": 441,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_441.jpg",
    "q": "Biển nào không cho phép rẽ phải?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 442,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_442.jpg",
    "q": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 0
  },
  {
    "id": 443,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_443.jpg",
    "q": "Biển nào cho phép quay đầu xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 444,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_444.jpg",
    "q": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3.",
      "4. Biển 1 và biển 2."
    ],
    "a": 2
  },
  {
    "id": 445,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_445.jpg",
    "q": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "1. Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
      "2. Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
      "3. Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
    ],
    "a": 0
  },
  {
    "id": 446,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_446.jpg",
    "q": "Biển số 3 có ý nghĩa như thế nào?",
    "options": [
      "1. Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại.",
      "2. Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
      "3. Biển hạn chế tốc độ tối đa trong khu vực.",
      "4. Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại."
    ],
    "a": 2
  },
  {
    "id": 447,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_447.jpg",
    "q": "Biển nào báo hiệu \"Đường phía trước có làn đường dành cho ô tô khách\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 448,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_448.jpg",
    "q": "Biển nào báo hiệu \"Rẽ ra đường có làn đường dành cho ô tô khách\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 449,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_449.jpg",
    "q": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
    "options": [
      "1. Biển 1 và 2.",
      "2. Cả ba biển.",
      "3. Không biển nào."
    ],
    "a": 0
  },
  {
    "id": 450,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_450.jpg",
    "q": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển.",
      "4. Không biển nào."
    ],
    "a": 0
  },
  {
    "id": 451,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_451.jpg",
    "q": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển.",
      "4. Không biển nào."
    ],
    "a": 1
  },
  {
    "id": 452,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_452.jpg",
    "q": "Biển nào báo hiệu \"Nơi đỗ xe dành cho người khuyết tật\"?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 453,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_453.jpg",
    "q": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
    "options": [
      "1. Đỗ xe hoàn toàn trên hè phố.",
      "2. Đỗ xe hoàn toàn dưới lòng đường.",
      "3. Đỗ từ 1/2 thân xe trở lên trên hè phố."
    ],
    "a": 2
  },
  {
    "id": 454,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_454.jpg",
    "q": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
    "options": [
      "1. Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
      "2. Tiếp tục lưu thông với tốc độ bình thường.",
      "3. Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
    ],
    "a": 2
  },
  {
    "id": 455,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_455.jpg",
    "q": "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
    "options": [
      "1. Bắt buộc.",
      "2. Không bắt buộc."
    ],
    "a": 0
  },
  {
    "id": 456,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_456.jpg",
    "q": "Biển nào dưới đây chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 457,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_457.jpg",
    "q": "Biển nào báo hiệu \"Cầu vượt liên thông\"?",
    "options": [
      "1. Biển 2 và biển 3.",
      "2. Biển 1 và biển 2.",
      "3. Biển 1 và biển 3.",
      "4. Cả ba biển."
    ],
    "a": 2
  },
  {
    "id": 458,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_458.jpg",
    "q": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "1. Đi thẳng hoặc rẽ trái trên cầu vượt.",
      "2. Đi thẳng hoặc rẽ phải trên cầu vượt.",
      "3. Báo hiệu cầu vượt liên thông."
    ],
    "a": 2
  },
  {
    "id": 459,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_459.jpg",
    "q": "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2 và biển 3."
    ],
    "a": 0
  },
  {
    "id": 460,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_460.jpg",
    "q": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
      "2. Báo hiệu đường cụt phía trước.",
      "3. Báo hiệu nút giao gần nhất phía trước.",
      "4. Báo hiệu trạm dừng nghỉ phía trước."
    ],
    "a": 0
  },
  {
    "id": 461,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_461.jpg",
    "q": "Tại đoạn đường có biển \"Làn đường dành riêng cho từng loại xe\" dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
    "options": [
      "1. Được phép chuyển sang làn khác.",
      "2. Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển."
    ],
    "a": 0
  },
  {
    "id": 462,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_462.jpg",
    "q": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
    "options": [
      "1. Có.",
      "2. Không."
    ],
    "a": 0
  },
  {
    "id": 463,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_463.jpg",
    "q": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
    "options": [
      "1. Có.",
      "2. Không."
    ],
    "a": 1
  },
  {
    "id": 464,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_464.jpg",
    "q": "Biển nào báo hiệu kết thúc đường cao tốc?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 465,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_465.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Chỉ dẫn sắp đến vị trí nhập làn xe.",
      "2. Chỉ dẫn vị trí nhập làn xe cách 250 m.",
      "3. Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m."
    ],
    "a": 1
  },
  {
    "id": 466,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_466.jpg",
    "q": "Biển nào chỉ dẫn nhập làn xe?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Cả hai biển."
    ],
    "a": 2
  },
  {
    "id": 467,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_467.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Bắt đầu đường cao tốc.",
      "2. Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
      "3. Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
      "4. Ý 1 và ý 3."
    ],
    "a": 3
  },
  {
    "id": 468,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_468.jpg",
    "q": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là như thế nào?",
    "options": [
      "1. Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
      "2. Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
      "3. Xăng dầu, ăn uống, cấp cứu, sửa chữa xe."
    ],
    "a": 0
  },
  {
    "id": 469,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_469.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
      "2. Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
      "3. Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m."
    ],
    "a": 2
  },
  {
    "id": 470,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_470.jpg",
    "q": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 0
  },
  {
    "id": 471,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_471.jpg",
    "q": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 2
  },
  {
    "id": 472,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_472.jpg",
    "q": "Trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2.",
      "3. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 473,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_473.jpg",
    "q": "Trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
    "options": [
      "1. Biển 1 và biển 2.",
      "2. Biển 1 và biển 3.",
      "3. Biển 2.",
      "4. Biển 3."
    ],
    "a": 1
  },
  {
    "id": 474,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_474.jpg",
    "q": "Biển nào chỉ dẫn người lái xe đi được cả hai hướng?",
    "options": [
      "1. Biển 1.",
      "2. Biển 2."
    ],
    "a": 1
  },
  {
    "id": 475,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_475.jpg",
    "q": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "1. Chỉ dẫn chướng ngại vật phía trước để cảnh báo phía trước có sự cản trở lưu thông bình thường (nằm bên trong phần xe chạy hay ngay sát phần đường xe chạy) và chỉ dẫn hướng đi qua đó cần đặt biển.",
      "2. Chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm, có bán kính cong nhỏ."
    ],
    "a": 1
  },
  {
    "id": 476,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_476.jpg",
    "q": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
    "options": [
      "1. Vạch 1.",
      "2. Vạch 2 và vạch 3.",
      "3. Vạch 3.",
      "4. Vạch 1 và vạch 2."
    ],
    "a": 2
  },
  {
    "id": 477,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_477.jpg",
    "q": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
    "options": [
      "1. Vạch 1.",
      "2. Vạch 2.",
      "3. Vạch 3.",
      "4. Vạch 1 và vạch 2."
    ],
    "a": 3
  },
  {
    "id": 478,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_478.jpg",
    "q": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
    "options": [
      "1. Vạch 1.",
      "2. Vạch 2.",
      "3. Vạch 3.",
      "4. Cả ba vạch."
    ],
    "a": 1
  },
  {
    "id": 479,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_479.jpg",
    "q": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
    "options": [
      "1. Vạch 1.",
      "2. Vạch 2.",
      "3. Vạch 3.",
      "4. Vạch 1 và vạch 3."
    ],
    "a": 3
  },
  {
    "id": 480,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_480.jpg",
    "q": "Các vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "1. Phân chia hai chiều xe chạy ngược chiều nhau.",
      "2. Phân chia các làn xe chạy cùng chiều nhau."
    ],
    "a": 0
  },
  {
    "id": 481,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_481.jpg",
    "q": "Các vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "1. Phân chia hai chiều xe chạy ngược chiều nhau.",
      "2. Phân chia các làn xe chạy cùng chiều nhau."
    ],
    "a": 1
  },
  {
    "id": 482,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_482.jpg",
    "q": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
    "options": [
      "1. Vạch 1.",
      "2. Vạch 2.",
      "3. Vạch 3.",
      "4. Vạch 1 và vạch 3."
    ],
    "a": 3
  },
  {
    "id": 483,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_483.jpg",
    "q": "Vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "1. Để xác định làn đường.",
      "2. Báo hiệu người lái xe chỉ được phép đi thẳng.",
      "3. Dùng để xác định khoảng cách giữa các phương tiện trên đường."
    ],
    "a": 2
  },
  {
    "id": 484,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_484.jpg",
    "q": "Vạch dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
      "2. Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
      "3. Dùng để xác định khoảng cách giữa các phương tiện trên đường."
    ],
    "a": 1
  },
  {
    "id": 485,
    "chapter": "Chương V: Báo hiệu đường bộ",
    "critical": false,
    "hasVisual": true,
    "image": "cau_485.jpg",
    "q": "Vạch dưới đây có ý nghĩa như thế nào?",
    "options": [
      "1. Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
      "2. Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
      "3. Dùng để xác định vị trí giữa các phương tiện trên đường."
    ],
    "a": 0
  },
  {
    "id": 486,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_486.jpg",
    "q": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe tải, xe mô tô.",
      "2. Xe tải, xe mô tô.",
      "3. Chỉ xe con."
    ],
    "a": 2
  },
  {
    "id": 487,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_487.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe tải, xe khách, xe con, xe mô tô.",
      "2. Xe tải, xe mô tô, xe khách, xe con.",
      "3. Xe khách, xe tải, xe con, xe mô tô.",
      "4. Xe mô tô, xe khách, xe tải, xe con."
    ],
    "a": 1
  },
  {
    "id": 488,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_488.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "2. Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
      "3. Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con.",
      "4. Xe con, xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách."
    ],
    "a": 0
  },
  {
    "id": 489,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_489.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe tải, xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con.",
      "2. Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
      "3. Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "4. Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con."
    ],
    "a": 3
  },
  {
    "id": 490,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_490.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe tải, xe con, xe mô tô.",
      "2. Xe con, xe tải, xe mô tô.",
      "3. Xe mô tô, xe con, xe tải.",
      "4. Xe con, xe mô tô, xe tải."
    ],
    "a": 2
  },
  {
    "id": 491,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_491.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe tải."
    ],
    "a": 0
  },
  {
    "id": 492,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_492.jpg",
    "q": "Trường hợp này xe nào được quyền đi trước?",
    "options": [
      "1. Xe mô tô.",
      "2. Xe con."
    ],
    "a": 1
  },
  {
    "id": 493,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_493.jpg",
    "q": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B).",
      "2. Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B), xe con (A).",
      "3. Xe con (B), xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu."
    ],
    "a": 0
  },
  {
    "id": 494,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_494.jpg",
    "q": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe cứu thương đi làm nhiệm vụ cấp cứu, xe chữa cháy đi làm nhiệm vụ chữa cháy, xe con.",
      "2. Xe chữa cháy đi làm nhiệm vụ chữa cháy, xe cứu thương đi làm nhiệm vụ cấp cứu, xe con.",
      "3. Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con, xe chữa cháy đi làm nhiệm vụ chữa cháy."
    ],
    "a": 1
  },
  {
    "id": 495,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_495.jpg",
    "q": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "1. Xe mô tô.",
      "2. Xe cứu thương đi làm nhiệm vụ cấp cứu."
    ],
    "a": 1
  },
  {
    "id": 496,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_496.jpg",
    "q": "Theo hướng mũi tên, xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
    "options": [
      "1. Xe khách.",
      "2. Xe tải.",
      "3. Xe con."
    ],
    "a": 0
  },
  {
    "id": 497,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_497.jpg",
    "q": "Theo hướng mũi tên, xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "1. Xe con.",
      "2. Xe tải."
    ],
    "a": 0
  },
  {
    "id": 498,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_498.jpg",
    "q": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "1. Xe công an đi làm nhiệm vụ khẩn cấp.",
      "2. Xe chữa cháy đi làm nhiệm vụ chữa cháy."
    ],
    "a": 1
  },
  {
    "id": 499,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_499.jpg",
    "q": "Theo tín hiệu đèn, xe nào được phép đi?",
    "options": [
      "1. Xe con và xe khách.",
      "2. Xe mô tô."
    ],
    "a": 0
  },
  {
    "id": 500,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_500.jpg",
    "q": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe mô tô.",
      "2. Xe con, xe tải.",
      "3. Xe tải, xe mô tô."
    ],
    "a": 1
  },
  {
    "id": 501,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_501.jpg",
    "q": "Trong trường hợp này xe nào được quyền đi trước?",
    "options": [
      "1. Xe công an đi làm nhiệm vụ khẩn cấp.",
      "2. Xe quân sự đi làm nhiệm vụ khẩn cấp."
    ],
    "a": 1
  },
  {
    "id": 502,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_502.jpg",
    "q": "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
    "options": [
      "1. Hướng 2, 3, 4.",
      "2. Chỉ hướng 1.",
      "3. Hướng 1 và 2.",
      "4. Hướng 3 và 4."
    ],
    "a": 1
  },
  {
    "id": 503,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_503.jpg",
    "q": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe tải, xe mô tô.",
      "2. Xe tải, xe con, xe mô tô.",
      "3. Xe khách, xe con, xe mô tô."
    ],
    "a": 0
  },
  {
    "id": 504,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_504.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe tải, xe mô tô, xe con.",
      "2. Xe con, xe khách, xe tải, xe mô tô.",
      "3. Xe mô tô, xe tải, xe khách, xe con.",
      "4. Xe mô tô, xe tải, xe con, xe khách."
    ],
    "a": 2
  },
  {
    "id": 505,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_505.jpg",
    "q": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe tải.",
      "2. Xe con và mô tô.",
      "3. Cả ba xe.",
      "4. Xe con và xe tải."
    ],
    "a": 0
  },
  {
    "id": 506,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_506.jpg",
    "q": "Theo hướng mũi tên, xe nào được quyền đi trước?",
    "options": [
      "1. Xe tải.",
      "2. Xe con (B).",
      "3. Xe con (A)."
    ],
    "a": 1
  },
  {
    "id": 507,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_507.jpg",
    "q": "Theo hướng mũi tên, những hướng nào xe gắn máy được phép đi?",
    "options": [
      "1. Cả ba hướng.",
      "2. Chỉ hướng 1 và 3.",
      "3. Chỉ hướng 1."
    ],
    "a": 0
  },
  {
    "id": 508,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_508.jpg",
    "q": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "1. Cả hai xe.",
      "2. Không xe nào vi phạm.",
      "3. Chỉ xe mô tô vi phạm.",
      "4. Chỉ xe tải vi phạm."
    ],
    "a": 0
  },
  {
    "id": 509,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_509.jpg",
    "q": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "1. Chỉ xe mô tô.",
      "2. Chỉ xe tải.",
      "3. Cả ba xe.",
      "4. Chỉ xe mô tô và xe tải."
    ],
    "a": 2
  },
  {
    "id": 510,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_510.jpg",
    "q": "Xe tải kéo xe mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
    "options": [
      "1. Đúng.",
      "2. Không đúng."
    ],
    "a": 1
  },
  {
    "id": 511,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_511.jpg",
    "q": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
    "options": [
      "1. Hướng 2 và 5.",
      "2. Chỉ hướng 1."
    ],
    "a": 1
  },
  {
    "id": 512,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_512.jpg",
    "q": "Theo hướng mũi tên, những hướng nào xe ô tô không được phép đi?",
    "options": [
      "1. Hướng 1 và 2.",
      "2. Hướng 3.",
      "3. Hướng 1 và 4.",
      "4. Hướng 2 và 3."
    ],
    "a": 1
  },
  {
    "id": 513,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_513.jpg",
    "q": "Xe nào vượt đúng quy tắc giao thông?",
    "options": [
      "1. Cả hai xe đều đúng.",
      "2. Xe con.",
      "3. Xe khách."
    ],
    "a": 0
  },
  {
    "id": 514,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_514.jpg",
    "q": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
    "options": [
      "1. Hướng 2 và 3.",
      "2. Hướng 1, 2 và 3.",
      "3. Hướng 1 và 3."
    ],
    "a": 0
  },
  {
    "id": 515,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_515.jpg",
    "q": "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
    "options": [
      "1. Không.",
      "2. Vi phạm."
    ],
    "a": 1
  },
  {
    "id": 516,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_516.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe khách.",
      "2. Xe tải."
    ],
    "a": 0
  },
  {
    "id": 517,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_517.jpg",
    "q": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe mô tô."
    ],
    "a": 1
  },
  {
    "id": 518,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_518.jpg",
    "q": "Xe kéo nhau trong trường hợp này đúng quy định không?",
    "options": [
      "1. Không đúng.",
      "2. Đúng."
    ],
    "a": 0
  },
  {
    "id": 519,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_519.jpg",
    "q": "Theo hướng mũi tên, những hướng nào xe ô tô con được phép đi?",
    "options": [
      "1. Hướng 1.",
      "2. Hướng 1, 3 và 4.",
      "3. Hướng 2, 3 và 4.",
      "4. Cả bốn hướng."
    ],
    "a": 1
  },
  {
    "id": 520,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_520.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe con (A), xe mô tô, xe con (B), xe đạp.",
      "2. Xe con (B), xe đạp, xe mô tô, xe con (A).",
      "3. Xe con (A), xe con (B), xe mô tô + xe đạp.",
      "4. Xe mô tô + xe đạp, xe con (A), xe con (B)."
    ],
    "a": 3
  },
  {
    "id": 521,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_521.jpg",
    "q": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
    "options": [
      "1. Chỉ hướng 1.",
      "2. Hướng 1, 3 và 4.",
      "3. Hướng 1, 2 và 3.",
      "4. Cả bốn hướng."
    ],
    "a": 0
  },
  {
    "id": 522,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_522.jpg",
    "q": "Những hướng nào xe tải được phép đi?",
    "options": [
      "1. Cả ba hướng.",
      "2. Hướng 2 và 3."
    ],
    "a": 1
  },
  {
    "id": 523,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_523.jpg",
    "q": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "1. Chỉ hướng 1.",
      "2. Hướng 1 và 4.",
      "3. Hướng 1 và 5.",
      "4. Hướng 1, 4 và 5."
    ],
    "a": 2
  },
  {
    "id": 524,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_524.jpg",
    "q": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "1. Cả bốn hướng.",
      "2. Trừ hướng 2.",
      "3. Hướng 2, 3 và 4.",
      "4. Trừ hướng 4."
    ],
    "a": 1
  },
  {
    "id": 525,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_525.jpg",
    "q": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "1. Xe mô tô.",
      "2. Xe con."
    ],
    "a": 0
  },
  {
    "id": 526,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_526.jpg",
    "q": "Xe ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
    "options": [
      "1. Không vi phạm.",
      "2. Vi phạm."
    ],
    "a": 1
  },
  {
    "id": 527,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_527.jpg",
    "q": "Xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe khách.",
      "2. Xe mô tô.",
      "3. Xe con.",
      "4. Xe con và xe mô tô."
    ],
    "a": 2
  },
  {
    "id": 528,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_528.jpg",
    "q": "Các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
      "2. Cho phép các xe ở mọi hướng được phép rẽ phải.",
      "3. Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
    ],
    "a": 2
  },
  {
    "id": 529,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_529.jpg",
    "q": "Theo hướng mũi tên, xe nào được phép đi?",
    "options": [
      "1. Xe mô tô, xe con.",
      "2. Xe con, xe tải.",
      "3. Xe mô tô, xe tải.",
      "4. Cả ba xe."
    ],
    "a": 2
  },
  {
    "id": 530,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_530.jpg",
    "q": "Xe con vượt xe tải như trường hợp này có đúng không?",
    "options": [
      "1. Đúng.",
      "2. Không đúng."
    ],
    "a": 0
  },
  {
    "id": 531,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_531.jpg",
    "q": "Xe nào vượt đúng quy tắc giao thông?",
    "options": [
      "1. Xe tải.",
      "2. Cả hai xe.",
      "3. Xe con."
    ],
    "a": 2
  },
  {
    "id": 532,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_532.jpg",
    "q": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe chữa cháy đi làm nhiệm vụ chữa cháy.",
      "2. Xe tải.",
      "3. Cả hai xe."
    ],
    "a": 1
  },
  {
    "id": 533,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_533.jpg",
    "q": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe tải, xe con.",
      "2. Xe con, xe tải, xe khách.",
      "3. Xe tải, xe khách, xe con."
    ],
    "a": 2
  },
  {
    "id": 534,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_534.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách và xe tải, xe con.",
      "2. Xe tải, xe khách, xe con.",
      "3. Xe con, xe khách, xe tải."
    ],
    "a": 0
  },
  {
    "id": 535,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_535.jpg",
    "q": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "1. Cả bốn hướng.",
      "2. Chỉ hướng 1 và 2.",
      "3. Trừ hướng 4."
    ],
    "a": 2
  },
  {
    "id": 536,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_536.jpg",
    "q": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
    "options": [
      "1. Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "2. Xe con, xe khách và xe công an đi làm nhiệm vụ khẩn cấp, xe tải.",
      "3. Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe khách, xe tải.",
      "4. Xe con, xe tải, xe khách, xe công an đi làm nhiệm vụ khẩn cấp."
    ],
    "a": 0
  },
  {
    "id": 537,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_537.jpg",
    "q": "Những hướng nào ô tô tải được phép đi?",
    "options": [
      "1. Cả bốn hướng.",
      "2. Hướng 1, 2 và 3.",
      "3. Hướng 1 và 4.",
      "4. Hướng 1, 3 và 4."
    ],
    "a": 3
  },
  {
    "id": 538,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_538.jpg",
    "q": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "1. Chỉ xe khách, xe mô tô.",
      "2. Tất cả các loại xe trên.",
      "3. Không xe nào chấp hành đúng quy tắc giao thông."
    ],
    "a": 1
  },
  {
    "id": 539,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_539.jpg",
    "q": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
    "options": [
      "1. Cả ba hướng.",
      "2. Hướng 1 và 2.",
      "3. Hướng 1 và 3.",
      "4. Hướng 2 và 3."
    ],
    "a": 2
  },
  {
    "id": 540,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_540.jpg",
    "q": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe công an đi làm nhiệm vụ khẩn cấp, xe quân sự đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "2. Xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "3. Xe mô tô + xe con, xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp."
    ],
    "a": 1
  },
  {
    "id": 541,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_541.jpg",
    "q": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "1. Xe A.",
      "2. Xe B."
    ],
    "a": 0
  },
  {
    "id": 542,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_542.jpg",
    "q": "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
    "options": [
      "1. Không vi phạm.",
      "2. Vi phạm."
    ],
    "a": 1
  },
  {
    "id": 543,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_543.jpg",
    "q": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe con (E), xe mô tô (C).",
      "2. Xe tải (B), xe mô tô (D).",
      "3. Xe khách (A), xe mô tô (C).",
      "4. Xe khách (A), xe mô tô (D)."
    ],
    "a": 0
  },
  {
    "id": 544,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_544.jpg",
    "q": "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
    "options": [
      "1. Nhường xe con rẽ trái trước.",
      "2. Đi thẳng không nhường."
    ],
    "a": 0
  },
  {
    "id": 545,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_545.jpg",
    "q": "Người lái xe điều khiển xe đi theo hướng nào là đúng quy tắc giao thông?",
    "options": [
      "1. Chỉ hướng 2.",
      "2. Hướng 1 và 2.",
      "3. Tất cả các hướng trừ hướng 3.",
      "4. Tất cả các hướng trừ hướng 4."
    ],
    "a": 1
  },
  {
    "id": 546,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_546.jpg",
    "q": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "1. Xe con (A).",
      "2. Xe con (B)."
    ],
    "a": 1
  },
  {
    "id": 547,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_547.jpg",
    "q": "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Rẽ trái ngay trước xe buýt.",
      "2. Rẽ trái trước xe tải.",
      "3. Nhường đường cho xe buýt và xe tải."
    ],
    "a": 2
  },
  {
    "id": 548,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_548.jpg",
    "q": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe con (B), xe mô tô (C).",
      "2. Xe con (A), xe mô tô (C).",
      "3. Xe con (E), xe mô tô (D).",
      "4. Tất cả các loại xe trên."
    ],
    "a": 2
  },
  {
    "id": 549,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_549.jpg",
    "q": "Xe nào đi trước là đúng quy tắc giao thông?",
    "options": [
      "1. Xe của bạn.",
      "2. Xe tải."
    ],
    "a": 1
  },
  {
    "id": 550,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_550.jpg",
    "q": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Quay đầu theo hướng A.",
      "2. Quay đầu theo hướng B.",
      "3. Cấm quay đầu."
    ],
    "a": 0
  },
  {
    "id": 551,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_551.jpg",
    "q": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Xe con và xe tải, xe của bạn.",
      "2. Xe của bạn, xe tải, xe con.",
      "3. Xe của bạn và xe con, xe tải.",
      "4. Xe của bạn, xe tải + xe con."
    ],
    "a": 2
  },
  {
    "id": 552,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_552.jpg",
    "q": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
    "options": [
      "1. Tăng tốc cho xe chạy vượt qua.",
      "2. Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
      "3. Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua."
    ],
    "a": 1
  },
  {
    "id": 553,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_553.jpg",
    "q": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe mô tô.",
      "2. Xe tải, xe mô tô.",
      "3. Xe con, xe tải."
    ],
    "a": 2
  },
  {
    "id": 554,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_554.jpg",
    "q": "Trong hình dưới, những xe nào chấp hành quy tắc giao thông?",
    "options": [
      "1. Xe tải ( D), xe con (B).",
      "2. Xe con (A), xe con (C), xe con (E), xe buýt (G).",
      "3. Xe con (A), xe con (B), xe tải (D)."
    ],
    "a": 1
  },
  {
    "id": 555,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_555.jpg",
    "q": "Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
    "options": [
      "1. Được vượt.",
      "2. Cấm vượt."
    ],
    "a": 1
  },
  {
    "id": 556,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_556.jpg",
    "q": "Bạn có được phép vượt xe mô tô phía trước không?",
    "options": [
      "1. Cho phép.",
      "2. Không được vượt."
    ],
    "a": 1
  },
  {
    "id": 557,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_557.jpg",
    "q": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
    "options": [
      "1. Vị trí A và B.",
      "2. Vị trí A và C.",
      "3. Vị trí B và C.",
      "4. Cả ba vị trí A, B, C."
    ],
    "a": 2
  },
  {
    "id": 558,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_558.jpg",
    "q": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
    "options": [
      "1. Được phép dừng ở vị trí A.",
      "2. Được phép dừng ở vị trí B.",
      "3. Được phép dừng ở vị trí A và B.",
      "4. Không được dừng."
    ],
    "a": 3
  },
  {
    "id": 559,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_559.jpg",
    "q": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe mô tô.",
      "2. Xe ô tô con.",
      "3. Không xe nào vi phạm.",
      "4. Cả hai xe."
    ],
    "a": 3
  },
  {
    "id": 560,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_560.jpg",
    "q": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe con.",
      "2. Xe tải.",
      "3. Xe con, xe tải."
    ],
    "a": 1
  },
  {
    "id": 561,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_561.jpg",
    "q": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe tải, xe con.",
      "2. Xe khách, xe con.",
      "3. Xe khách, xe tải."
    ],
    "a": 2
  },
  {
    "id": 562,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_562.jpg",
    "q": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe con, xe tải, xe khách.",
      "2. Xe tải, xe khách, xe mô tô.",
      "3. Xe khách, xe mô tô, xe con.",
      "4. Cả bốn xe."
    ],
    "a": 1
  },
  {
    "id": 563,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_563.jpg",
    "q": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe khách, xe tải.",
      "2. Xe khách, xe con.",
      "3. Xe con, xe tải.",
      "4. Xe khách, xe tải, xe con."
    ],
    "a": 0
  },
  {
    "id": 564,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_564.jpg",
    "q": "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
    "options": [
      "1. Đánh lái sang trái cho xe vượt qua.",
      "2. Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
      "3. Cấm vượt."
    ],
    "a": 1
  },
  {
    "id": 565,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_565.jpg",
    "q": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "1. Xe tải, xe mô tô.",
      "2. Xe khách, xe mô tô.",
      "3. Xe tải, xe con.",
      "4. Xe mô tô, xe con."
    ],
    "a": 1
  },
  {
    "id": 566,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_566.jpg",
    "q": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "1. Xe con (A), xe con (B), xe tải (D).",
      "2. Xe tải (D), xe con (E), xe buýt (G).",
      "3. Xe tải ( D), xe con (B).",
      "4. Xe con (B), xe con (C)."
    ],
    "a": 2
  },
  {
    "id": 567,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_567.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe của bạn, xe mô tô, xe con.",
      "2. Xe con, xe của bạn, xe mô tô.",
      "3. Xe mô tô, xe con, xe của bạn."
    ],
    "a": 2
  },
  {
    "id": 568,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_568.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe của bạn, xe mô tô, xe con.",
      "2. Xe con, xe của bạn, xe mô tô.",
      "3. Xe mô tô, xe con, xe của bạn."
    ],
    "a": 1
  },
  {
    "id": 569,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_569.jpg",
    "q": "Xe nào phải dừng lại trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe của bạn.",
      "3. Cả hai xe."
    ],
    "a": 0
  },
  {
    "id": 570,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_570.jpg",
    "q": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
    "options": [
      "1. Đi thẳng, rẽ trái.",
      "2. Đi thẳng, rẽ phải.",
      "3. Rẽ trái.",
      "4. Đi thẳng, rẽ phải, rẽ trái."
    ],
    "a": 0
  },
  {
    "id": 571,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_571.jpg",
    "q": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
    "options": [
      "1. Chuyển sang làn đường bên phải và rẽ phải.",
      "2. Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
      "3. Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh."
    ],
    "a": 2
  },
  {
    "id": 572,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_572.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
      "2. Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
      "3. Tăng tốc độ, rẽ phải trước xe đạp."
    ],
    "a": 1
  },
  {
    "id": 573,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_573.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
      "2. Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
      "3. Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh."
    ],
    "a": 2
  },
  {
    "id": 574,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_574.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Nhường đường cho xe khách và đi trước xe đạp.",
      "2. Nhường đường cho xe đạp và đi trước xe khách.",
      "3. Nhường đường cho xe đạp và xe khách."
    ],
    "a": 2
  },
  {
    "id": 575,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_575.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe tải.",
      "3. Xe của bạn."
    ],
    "a": 1
  },
  {
    "id": 576,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_576.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe đi ngược chiều.",
      "2. Xe của bạn."
    ],
    "a": 1
  },
  {
    "id": 577,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_577.jpg",
    "q": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
    "options": [
      "1. Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
      "2. Không được vượt những người đi xe đạp."
    ],
    "a": 1
  },
  {
    "id": 578,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_578.jpg",
    "q": "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
      "2. Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
      "3. Tăng tốc độ trên làn đường của mình và vượt xe con.",
      "4. Ý 1 và ý 2."
    ],
    "a": 3
  },
  {
    "id": 579,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_579.jpg",
    "q": "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
    "options": [
      "1. Chuyển sang nửa đường bên trái để đi tiếp.",
      "2. Bấm còi, nháy đèn báo hiệu và đi tiếp.",
      "3. Giảm tốc độ, dừng lại nhường đường."
    ],
    "a": 2
  },
  {
    "id": 580,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_580.jpg",
    "q": "Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
      "2. Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
      "3. Phanh xe giảm tốc độ và đi sát vào lề đường bên trái."
    ],
    "a": 0
  },
  {
    "id": 581,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_581.jpg",
    "q": "Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
      "2. Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
      "3. Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình."
    ],
    "a": 1
  },
  {
    "id": 582,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_582.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Tăng tốc độ và đi thẳng qua ngã tư.",
      "2. Dừng xe trước vạch dừng.",
      "3. Giảm tốc độ và đi thẳng qua ngã tư."
    ],
    "a": 2
  },
  {
    "id": 583,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_583.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe của bạn, xe mô tô, xe đạp.",
      "2. Xe mô tô, xe đạp, xe của bạn.",
      "3. Xe đạp, xe mô tô, xe của bạn."
    ],
    "a": 2
  },
  {
    "id": 584,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_584.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe của bạn, xe tải, xe con.",
      "2. Xe con, xe tải, xe của bạn.",
      "3. Xe tải, xe của bạn, xe con.",
      "4. Xe của bạn, xe con, xe tải."
    ],
    "a": 3
  },
  {
    "id": 585,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_585.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe của bạn.",
      "2. Xe con."
    ],
    "a": 0
  },
  {
    "id": 586,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_586.jpg",
    "q": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe của bạn."
    ],
    "a": 1
  },
  {
    "id": 587,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_587.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
      "2. Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
      "3. Giảm tốc độ, để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường."
    ],
    "a": 2
  },
  {
    "id": 588,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_588.jpg",
    "q": "Xe nào được đi trước trong trường hợp này?",
    "options": [
      "1. Xe con.",
      "2. Xe của bạn."
    ],
    "a": 1
  },
  {
    "id": 589,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_589.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe con, xe tải, xe của bạn.",
      "2. Xe tải, xe con, xe của bạn.",
      "3. Xe tải, xe của bạn, xe con."
    ],
    "a": 1
  },
  {
    "id": 590,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_590.jpg",
    "q": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "1. Tăng tốc độ cho xe lấn sang phần đường bên trái.",
      "2. Giảm tốc độ cho xe lấn sang phần đường bên trái.",
      "3. Giảm tốc độ cho xe đi sát phần đường bên phải."
    ],
    "a": 2
  },
  {
    "id": 591,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_591.jpg",
    "q": "Xe nào được đi trước trong trường hợp này?",
    "options": [
      "1. Xe tải.",
      "2. Xe của bạn."
    ],
    "a": 0
  },
  {
    "id": 592,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_592.jpg",
    "q": "Xe nào dừng đúng theo quy tắc giao thông?",
    "options": [
      "1. Xe con.",
      "2. Xe mô tô.",
      "3. Cả 2 xe đều đúng."
    ],
    "a": 0
  },
  {
    "id": 593,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_593.jpg",
    "q": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "1. Xe tải, xe đạp, xe của bạn.",
      "2. Xe của bạn, xe đạp, xe tải.",
      "3. Xe của bạn, xe tải, xe đạp."
    ],
    "a": 2
  },
  {
    "id": 594,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_594.jpg",
    "q": "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
    "options": [
      "1. Hướng 1.",
      "2. Hướng 2.",
      "3. Cả hai hướng đều được."
    ],
    "a": 0
  },
  {
    "id": 595,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_595.jpg",
    "q": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới dây, bạn xử lý như thế nào?",
    "options": [
      "1. Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
      "2. Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
      "3. Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều."
    ],
    "a": 1
  },
  {
    "id": 596,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_596.jpg",
    "q": "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
    "options": [
      "1. Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
      "2. Dừng lại trước rào chắn một khoảng cách an toàn.",
      "3. Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm barie để xe bạn qua."
    ],
    "a": 1
  },
  {
    "id": 597,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_597.jpg",
    "q": "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
    "options": [
      "1. Đúng.",
      "2. Sai."
    ],
    "a": 1
  },
  {
    "id": 598,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_598.jpg",
    "q": "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
    "options": [
      "1. Được vượt.",
      "2. Không được vượt."
    ],
    "a": 1
  },
  {
    "id": 599,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_599.jpg",
    "q": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
    "options": [
      "1. Đúng.",
      "2. Không đúng."
    ],
    "a": 0
  },
  {
    "id": 600,
    "chapter": "Chương VI: Giải thế sa hình và xử lý tình huống",
    "critical": false,
    "hasVisual": true,
    "image": "cau_600.jpg",
    "q": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để bảo đảm an toàn?",
    "options": [
      "1. Vượt về phía bên phải để đi tiếp.",
      "2. Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
      "3. Vượt về phía bên trái để đi tiếp."
    ],
    "a": 1
  }
];
// =========================================================================
// BỘ CÂU HỎI RIÊNG CHO XE MÔ TÔ (250 CÂU) - CHUẨN BỘ CÔNG AN
// Tự động lọc từ bộ 600 câu và ghi đè chính xác 20 câu điểm liệt
// =========================================================================

// =========================================================================
// BỘ CÂU HỎI RIÊNG CHO XE MÔ TÔ (250 CÂU) - CHUẨN BỘ CÔNG AN
// Tự động lọc từ bộ 600 câu và ghi đè chính xác 20 câu điểm liệt
// =========================================================================

// Mảng ID 250 câu Mô tô (Đặt tên có hậu tố _QS để tránh trùng với biến bên thi.html)
const MOTO_250_IDS_QS = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19, 20, 21, 22, 24, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48,
  49, 51, 52, 53, 54, 56, 57, 59, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 80, 81, 87, 88, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 102, 103, 107,
  109, 110, 111, 119, 123, 124, 125, 126, 137, 138, 140, 141, 142, 145, 146, 151, 155, 163, 167, 178,
  182, 185, 187, 189, 191, 192, 193, 194, 195, 200,
  206, 215, 219, 232, 233, 240, 241, 242, 254, 255, 257, 258, 259, 260, 261,
  303, 304, 305, 306, 307, 313, 314, 315, 317, 318, 322, 323, 324, 325, 326, 329, 330, 335, 345, 346,
  347, 348, 349, 350, 351, 354, 360, 362, 364, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376,
  377, 380, 381, 382, 386, 387, 389, 390, 391, 393, 394, 395, 397, 398, 400, 401, 411, 412, 413, 415,
  419, 422, 427, 430, 431, 432, 433, 434, 435, 437, 438, 439, 440, 441, 442, 445, 450, 451, 452, 454,
  455, 457, 458, 459, 460, 461, 474, 475, 476, 478,
  486, 487, 490, 492, 495, 499, 500, 503, 504, 505, 507, 508, 509, 517, 520, 525, 527, 528, 529, 538,
  539, 540, 543, 548, 553, 556, 559, 560, 562, 565, 567, 568, 583, 592, 600
]);

// 20 câu điểm liệt chính thức của Bộ Công an dành riêng cho xe Mô tô (A1, A)
const MOTO_CRITICAL_IDS_QS = new Set([
  19, 20, 21, 22, 24, 26, 27, 28, 30, 32, 34, 35, 47, 48, 52, 53, 206, 215, 254, 260
]);
// Tự động tạo mảng MOTO_QUESTIONS và ghi đè lại cờ "critical"
const MOTO_QUESTIONS = VERBATIM_QUESTIONS
  .filter(q => MOTO_250_IDS_QS.has(Number(q.id)))
  .map(q => ({
    ...q,
    critical: MOTO_CRITICAL_IDS_QS.has(Number(q.id)) // Ép chuẩn lại đúng 20 câu điểm liệt
  }));