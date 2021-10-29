1. Cách kiểm tra một biến x cho trước là function, array, number, string, undefined

- Đa số cách kiểm tra 1 biến cho trước thì sẽ sử dụng toán tử typeof
- Nhưng có 1 vài trường hợp đặc biệt ví dụ như:
```
```

     + String

```
const message = new String('This will not work');
console.log(typeof message); //=> "object"
```

    + Arrays: Cách đúng để kiểm tra xem một biến có phải là một mảng hay không bằng cách sử dụng phương thức tĩnh _Array.isArray ()

```
Array.isArray(someVar);
Array.isArray([11, 22, 33]); //=> true
Array.isArray({}); //=> false
```

    + Funtion

```
const f = function() {};
console.log(typeof f === 'function'); //=> true
```

    + Objects
```
const a = {};
console.log(a === Object(a)); //=> true

const b = [];
console.log(b === Object(b)); //=> true

const c = function() {};
console.log(c === Object(c)); //=> true

const d = 123;
console.log(d === Object(d)); //=> false

const e = '';
console.log(e === Object(e)); //=> false
```    

    + Number: trong trường hợp bạn cũng cần kiểm tra các đối tượng trình bao bọc và không chỉ các giá trị nguyên thủy, bạn có thể kết hợp typeof và instanceof:
```
const isNumber = value => typeof value === 'number' || value instanceof Number;
```



2. Tìm hiểu về Event loop, giải thích tại sao đoạn code sau chữ Một lại hiện sau chữ Hai?

```
setTimeout(function() {
console.log('Một');
}, 0);
function second() {
console.log('Hai');
}
second();
```

- EventLoop: Là một vòng lặp vô tận, nó sẽ chuyển các yêu cầu sang Thread Pool (Bể chứa các luồng), đồng thời mỗi yêu cầu sẽ được đăng ký một hàm Callback. Khi một yêu cầu được xử lý xong, hàm Callback tương ứng sẽ được gọi thực thi.
- Khái niệm cơ bản:
  - Stack
    Stack là một vùng nhớ đặc biệt trên con chip máy tính phục vụ cho quá trình thực thi các dòng lệnh mà cụ thể là các hàm. Hàm chẳng qua là một nhóm các lệnh và chương trình thì gồm một nhóm các hàm phối hợp với nhau. Mỗi khi một hàm được triệu gọi thì nó sẽ được đẩy vào một hàng đợi đặc biệt có tên là stack. Stack là một hàng đợi kiểu LIFO (Last In First Out) nghĩa là vào đầu tiên thì ra sau cùng. Một hàm chỉ được lấy ra khỏi stack khi nó hoàn thành và return.
    Nếu trong một hàm (Foo) có triệu gọi một hàm khác (Bar) thì trạng thái hiện tại của hàm Foo được cất giữ trong stack và hàm Bar sẽ được chèn vào stack. Vì đây là hàng đợi LIFO nên Bar sẽ được xử lý trước Foo. Khi Bar xong và return thì mới đến lượt Foo được xử lý. Khi Foo được xử lý xong và return thì Stack rỗng và sẽ đợi các hàm tiếp theo được đẩy vào.
  - Heap
    Heap là vùng nhớ được dùng để chưa kết quả tạm phục vụ cho việc thực thi các hàm trong stack. Heap càng lớn thì khả năng tính toán càng cao. Heap có thể được cấp phát tĩnh hoặc cấp phát động bằng mấy lệnh kiểu alloc với malloc
- Giải thích code:
  - Các lệnh sẽ được thêm lần lượt vào callStack để chạy, chạy đến setTimeOut, callback(function()) sẽ được ném tới WebAPIs, nhưng là do timeout set = 0 nên sẽ được ném ngay vào callback Queue, chờ lúc callStack rỗng, EventLoop sẽ bốc lên thì lúc đó hàm mới chạy
  - Còn funtion second không bị phụ thuộc vào gì hết nên sẽ chạy trực tiếp nên sẽ hiện Hai trước Một

3. Tìm hiểu về deep copy và shallow copy trong JS. Giải thích kết quả của đoạn code sau.

```
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';
console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']
```

- Deep copy: tức là tạo mới một biến có cùng giá trị và được cắt đứt quan hệ hoàn toàn với biến được copy
- Shallow copy: có ý nghĩa rằng sau khi copy, biến mới hoặc các thành phần của biến mới vẫn còn quan hệ dây mơ rễ má với biến ban đầu, nguy hiểm quá nhỉ. Để hiểu thêm về copy, chúng ta cùng tìm hiểu về cách Javascript lưu dữ liệu.
- Các kiểu dữ liệu: 
    + Number  
    + String 
    + Boolean 
    + undefined 
    + null
- Với các kiểu dữ liệu nguyên thủy, khi được gán giá trị sẽ được gắn chặt với biến, bạn sẽ không phải lo lắng về việc copy các biến này vì bạn sẽ luôn có được một ban sao thực thụ
- Giải thích dòng code:
  Do đây là kiểu dữ liệu hỗn hợp, dự liệu trong bản gốc sẽ không được gán chặt với biến. Khi chúng ta thay đổi thì sẽ thay đổi được giá trị bản gốc ban đầu của nó
