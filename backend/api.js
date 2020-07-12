const fs = require("fs");

export function getNumberByType(type) {
  return new Promise((res, rej) =>
      fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function getFormsByType(type) {
  return new Promise((res, rej) =>
      fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function getFormById(id) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function getUnresolvedByType(type) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function getResolvedByType(type) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function getResolvedByOrg(organization) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
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

export function pushForm(id, form) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                index[id] = form;
                json = JSON.stringify(index);
                fs.writeFile("./backend/data1.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });
                res('success');
            }
        })
    );
}

export function updateRepliesById(id, replies) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej (err);
            } else {
                var index = JSON.parse(data);
                index[id]["replies"] = replies;
                json = JSON.stringify(index);
                fs.writeFile("./backend/data1.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });

                res("success");
            }
        })
    );
}
export function updateFormById(id, newform) {
    return new Promise((res, rej) =>
        fs.readFile("./backend/data1.json", "utf8", function (err, data) {
            if (err) {
                console.error(err);
                rej(err);
            } else {
                var index = JSON.parse(data);
                index[id] = newform;
                json = JSON.stringify(index);
                fs.writeFile("./backend/data1.json", json, "utf8", function (err) {
                    if (err) console.error(err);
                });

                res("success");
            }
        })
    );
}
