from flask import Flask, request
import json

app = Flask(__name__)


@app.route('/user/<request_data>', methods=['POST'])
def user(request_data):
    print(request_data)
    return_dict = {
        'code': 20000,
        'data': '123' + request_data
    }
    return json.dumps(return_dict, ensure_ascii=False, indent=4)


# python中的dict（字典）按前端说就是 对象类型  应该是一层对象
# json.dumps()就是将对象类型转换String类型
# json.loads() 就是将String类型转对象类型
# json.dump() 用于将dict类型的数据转成str，并写入到json文件中
# json.load() 用于从json文件中读取数据

@app.route('/login', methods=['POST'])
def login():
    # 如果这样打印出来是none的话
    # 用这个试试 username = request.json.get('username')
    username = request.form.get('username')
    password = request.form.get('password')
    print(username)
    print(password)
    return_dict = {
        'code': 20000,
        'data': 'info'
    }
    return return_dict


@app.route('/user/info', methods=['GET'])
def info():
    name = request.args.get("name")
    print(name)
    return_dict = {
        'code': 20000,
        'data': 'info'
    }
    return return_dict


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5999)
