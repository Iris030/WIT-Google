const fs = require("fs");

function getNumberByType(type) {
  return new Promise((res, rej) =>
    fs.readFile("./index.json", "utf8", function (err, data) {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        var index = JSON.parse(data);
        var num = 0;
        for (var key in index) {
          if (index[key]["type"] == type) num++;
        }
        res(num);
      }
    })
  );
}

function getFormsByType(type) {
  return new Promise((res, rej) =>
    fs.readFile("./index.json", "utf8", function (err, data) {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        var index = JSON.parse(data);
        var arr = [];
        for (var key in index) {
            if (index[key]["type"] == type) arr.push(index[key]);
            console.log(arr);
        }
        res(arr);
      }
    })
  );
}

function getFormById(id) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.log("error");
                rej(err);
            } else {
                var index = JSON.parse(data);
                console.log(index);
                if (index.hasOwnProperty(id)) {
                    var need = index[id];
                    console.log(need);
                    res(need);
                } else {
                    res(null);
                }
            }
        })
    );
}

function getUnresolvedByType(type) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                var arr = [];
                for (var key in index) {
                    if (
                        index[key]["type"] == type &&
                        index[key]["resolve"]["status"] == false
                    )
                        arr.push(index[key]);
                }
                res(arr);
            }
        })
    );
}

function getResolvedByType(type) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                var arr = [];
                for (var key in index) {
                    if (
                        index[key]["type"] == type &&
                        index[key]["resolve"]["status"] == true
                    )
                        arr.push(index[key]);
                }
                res(arr);
            }
        })
    );
}

function getResolvedByOrg(organization) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                var arr = [];
                for (var key in index) {
                    if (
                        index[key]["resolve"]["status"] == true &&
                        index[key]["resolve"]["helper"] == organization
                    )
                        arr.push(index[key]);
                }
                res(arr);
            }
        })
    );
}

function pushForm(id, form) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                index[id] = form;
                json = JSON.stringify(index);
                fs.writeFile("./index.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });
                res('success');
            }
        })
    );
}

function updateRepliesById(id, replies) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej (err);
            } else {
                var index = JSON.parse(data);
                index[id]["replies"] = replies;
                json = JSON.stringify(index);
                fs.writeFile("./index.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });

                res("success");
            }
        })
    );
}
function updateFormById(id, newform) {
    return new Promise((res, rej) =>
        fs.readFile("./index.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                index[id] = newform;
                json = JSON.stringify(index);
                fs.writeFile("./index.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });

                res("success");
            }
        })
    );
}



module.exports = {
    getNumberByType: getNumberByType,
    getFormsByType: getFormsByType,
    getFormById: getFormById,
    getUnresolvedByType: getUnresolvedByType,
    getResolvedByType: getResolvedByType,
    getResolvedByOrg: getResolvedByOrg,
    pushForm: pushForm,
    updateRepliesById, updateRepliesById,
    updateFormById, updateFormById
}
