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
        let cert = fs.readFileSync(path.join(__dirname, './pem/public_key.pem'));//私钥 可以自己生成
        let token = jwtoken.sign(data, cert, { expiresIn: '1h' });
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, './pem/public_key.pem'));//私钥 可以自己生成
        let res;
        // let result = jwtoken.verify(token.split(" ")[1], cert)
        // console.log('还是四十', result)
        jwtoken.verify(token, cert, (error, decoded) => {
            if (error) {
                console.log(error.message)
                res = 'err'
            }
            res = decoded
        })
        return res;
    }
}

module.exports = Jwt;
