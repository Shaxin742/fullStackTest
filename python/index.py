from flask import Flask,request
import json
app = Flask(__name__)

print('wwwwww')

@app.route('/index1' , methods = ['POST'])
def getcontent ():
    return_dict = {'return_code': '200', 'return_info': '处理成功', 'result': False}
    # return json.dumps(return_dict, ensure_ascii=False, indent=4)
    return return_dict
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5590)