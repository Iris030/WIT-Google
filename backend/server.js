const fs = require('fs');

export function getNumberByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            var num = 0;
            for (var key in index) {
                if (index[key]["type"] == type) num++;
            }
            return num;
        }
    });

}

export function getFormsByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type) arr.append(index[key]);
            }
            return arr;
        }
    });

}

export function getFormById(id) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            if (obj.hasOwnProperty(id)) {
                var need = index[id];
                return JSON.stringify(need);
            } else {
                return null;
            }
        }
    });

}


export function getUnresolvedByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == false) arr.append(index[key]);
            }
            return JSON.stringify(arr);
        }
    });

}

export function getResolvedByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == true) arr.append(index[key]);
            }
            return JSON.stringify(arr);
        }
    });

}

export function getResolvedByOrg(organization) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == true && index[key]["resolve"]["helper"] == organization) arr.append(index[key]);
            }
            return JSON.stringify(arr);
        }
    });

}

export function pushForm(id, form) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            index[id] = form;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', callback);
        }
    });

}

export function updateRepliesById(id, replies) {
    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            index[id]["replies"] = replies;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', callback);
        }
    });
}

export function updateFormById(id, newform) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        } else {
            var index = JSON.parse(data);
            index[id] = newform;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', callback);
        }
    });

}


