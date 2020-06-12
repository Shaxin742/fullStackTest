// 引入模块依赖
const fs = require('fs');
const path = require('path');
const jwtoken = require('jsonwebtoken');
// 创建 token 类
class Jwt {
    constructor(data) {
        this.data = data;
    }

    //生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, './pem/public_key.pem'));//私钥 可以自己生成
        let token = jwtoken.sign({
            data,
            exp: created + 60 * 300,
        }, cert, { algorithm: 'RS256' });
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data;
        console.log("asdasdasd",token)
        let cert = fs.readFileSync(path.join(__dirname, './pem/public_key.pem'));//公钥 可以自己生成
        console.log("asdasdasd",cert)
        let res;
        try {
            console.log(123123)
            let result = jwtoken.verify(token, cert, { algorithms: ['RS256'] }) || {};
            console.log("verify", result)
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt;
