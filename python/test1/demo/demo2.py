# coding=UTF-8
import pymysql

db = pymysql.connect("127.0.0.1", "root", "Shaxin74250", "test")
cursor = db.cursor()
# qwww吃的是是是是
# cursor.execute("SELECT VERSION()")
#
# data = cursor.fetchone()
#
# print ("Database version : %s " % data)
# 使用 cursor() 方法创建一个游标对象 cursor


# 使用 execute() 方法执行 SQL，如果表存在则删除
# cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")
#
# # 使用预处理语句创建表
# sql = """CREATE TABLE EMPLOYEE (
#          FIRST_NAME  CHAR(20) NOT NULL,
#          LAST_NAME  CHAR(20),
#          AGE INT,
#          SEX CHAR(1),
#          INCOME FLOAT )"""

# SQL 插入语句
sql = """INSERT INTO EMPLOYEE(FIRST_NAME,
         LAST_NAME, AGE, SEX, INCOME)
         VALUES ('Mac', 'Mohan', 20, 'M', 2000)"""
try:
    # 执行sql语句
    cursor.execute(sql)
    # 提交到数据库执行
    db.commit()
except:
    # 如果发生错误则回滚
    db.rollback()

cursor.execute(sql)
db.close()