from flask import Flask, request
import json
import calendar
import time
import datetime

app = Flask(__name__)


@app.route('/user/login', methods=['POST'])
def login():
    tokens = {
        'admin': {
            'token': 'admin-token'
        },
        'editor': {
            'token': 'editor-token'
        }
    }
    username = request.json.get('username')
    password = request.json.get('password')
    print(username)
    print(password)
    token = tokens[username]
    return_dict = {
        'code': 200,
        'data': token
    }
    return return_dict


@app.route('/user/info', methods=['GET'])
def info():
    token = request.args.get("token")
    users = {
        'admin-token': {
            'roles': ['admin'],
            'introduction': 'I am a super administrator',
            'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            'name': 'Super Admin'
        },
        'editor-token': {
            'roles': ['editor'],
            'introduction': 'I am an editor',
            'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            'name': 'Normal Editor'
        }
    }
    return_dict = {}
    info = users[token]
    if not info:
        return_dict = {
            'code': 50008,
            'message': 'Login failed, unable to get user details.'
        }
    else:
        return_dict = {
            'code': 200,
            'data': info
        }
    return return_dict


@app.route('/user/logout', methods=['POST'])
def logout():
    return_dict = {
        'code': 200,
        'data': 'success'
    }
    return return_dict


# def getDate(year, month, day = 0):
#     return new Date(year, month, day)

def getMothDate(year, month):
    """
    返回某年某月的所有日期
    :param year:
    :param month:
    :return:
    """
    date_list = []
    for i in range(calendar.monthrange(year, month)[1] + 1)[1:]:
        date_list.append({'year':year,'month': month, 'day':i,})
    return date_list


@app.route('/dashBoard/getCalendar', methods=['GET'])
def getCalendar():
    print(time.time())
    print(datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

    date_list = getMothDate(2019, 6)
    for date in date_list:
        print(date)
    return_dict = {
        'code': 200,
        'data': 'success'
    }
    return return_dict


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5900)
