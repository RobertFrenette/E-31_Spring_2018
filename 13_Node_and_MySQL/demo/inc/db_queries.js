function executeQuery(conn, res, qryStr) {
    return conn.query(qryStr, function(err, rows) {
        //console.log('executing query:\n' + qryStr);
        if (err) {
            console.log('Error while performing Query.');
            console.log('Executing Query:\n' + qryStr);
            conn.end();
			
			if (err.toString().indexOf('ER_DUP_ENTRY')) {
				res.json(
						{
						'success'  : false,
						'msg'      : 'Error executing query.',
						'err_code' : 'ER_DUP_ENTRY'
					}
				 );
			} else {
				res.json(
					{
						'success' : false,
						'msg'     : 'Error executing query.'
					}
				 );
			}
        }
        //console.log(rows);
        conn.end();
        res.json(rows);
    });
}

module.exports = {
    postUserLogin: function(conn, req, res) {
        if (conn) {
			var userName = req.body.user_name;
			var userPassword = req.body.user_password;
            var qryStr = 'SELECT * FROM user WHERE user_name = "' +  userName + '" and password = "' + userPassword + '"';
            executeQuery(conn, res, qryStr);
        } else {
           res.json(
				{
					'success' : false,
					'msg'     : 'No DB Connection established.'
				}
			);
        }
    }
};
