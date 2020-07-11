const fs = require('fs');

export async function getNumberByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
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

export async function getFormsByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
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

export async function getFormById(id) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.log("error");
            return err;
        } else {
            var index = JSON.parse(data);
            console.log(index);
            if (index.hasOwnProperty(id)) {
                var need = index[id];
                console.log(need);
                return index;
            } else {
                return null;
            }
        }
    });

}


export async function getUnresolvedByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == false) arr.append(index[key]);
            }
            return arr;
        }
    });

}

export async function getResolvedByType(type) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == true) arr.append(index[key]);
            }
            return arr;
        }
    });

}

export async function getResolvedByOrg(organization) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            var arr = [];
            for (var key in index) {
                if (index[key]["type"] == type && index[key]["resolve"]["status"] == true && index[key]["resolve"]["helper"] == organization) arr.append(index[key]);
            }
            return arr;
        }
    });

}

export async function pushForm(id, form) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            index[id] = form;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', function (err) {
                if (err) console.error(err);
            });
        }
    });

}

export async function updateRepliesById(id, replies) {
    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            index[id]["replies"] = replies;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', function (err) {
                if (err) console.error(err);
            });
        }
    });
}
export async function updateFormById(id, newform) {

    fs.readFile('./index.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return err;
        } else {
            var index = JSON.parse(data);
            index[id] = newform;
            json = JSON.stringify(index);
            fs.writeFile('./index.json', json, 'utf8', function (err) {
                if (err) console.error(err);
            });
        }
    });

}
