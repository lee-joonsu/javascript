// callback Hell solution - promise
// 우리는 먼저 사용자의 데이터를 백엔드, 서버에게서 데이터를 받아오는 클래스를 만듦.
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage(); // 변수 선언
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
