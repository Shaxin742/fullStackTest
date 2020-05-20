
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    print(username)
    print(password)
    return_dict = {
        'code': 20000,
        'data': 'info'
    }
    # return json.dumps(return_dict, ensure_ascii=False, indent=4)
    return return_dict
