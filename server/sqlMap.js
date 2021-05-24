// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
    user: {
        add: 'insert into user(userName,password) values (?,?)',
       
    },
    testlog: {
        addlogin:'insert into logintest(nameuser,pswuser) values (?,?)',
    }
   

}
module.exports = sqlMap
