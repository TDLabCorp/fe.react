import { net } from "./net";

const signIn = async (params) => {
  return new Promise((resolve, reject) => {
    net.post("/session", params).then((response) => {
      const { status, data } = response;
      if (200 === status) {
        const { success, code, body } = data;
        if (success) {
          resolve(body);
          return;
        }
      }
      reject("로그인에 실패했습니다.");
    });
  });
};

export { signIn };
