console.log("hello")

var fs = require("fs");
var path = require("path");

// fs APIはコールバックを取るので現代的にPromiseに変換する
// function asynchronous<T, U, V>(fn: (...args: T)=> U, ctx: V): (...args: T)=> Promise<U>
function asynchronous(fn, ctx){
  return function _asyncFn(){
    var args = Array.prototype.slice.call(arguments);
    return new Promise(function(resolve, reject){
      fn.apply(ctx, args.concat(function(err, val){
        if(err){
          reject(err);
        }else{
          resolve(val);
        }
      }));
    });
  };
}

// function readdirAsync(path: string|Buffer, opt?: "utf8"|{encoding: "utf8"}): Promise<[string]>
fs.readdirAsync = asynchronous(fs.readdir, fs);
// function lstatAsync(path: string|Buffer): Promise<fs.Stats>
fs.lstatAsync = asynchronous(fs.lstat, fs);


// function ls(pathname: string): Promise<[{name: string, stat: fs.Stats}]>
function ls(pathname){
  return fs.readdirAsync(pathname)
  .then(function(names){
    return Promise.all(
      names.map(function(name){
        return fs.lstatAsync(path.join(pathname, name))
        .then(function(stat){
          return {name: name, stat: stat};
        });
      })
    )
  });
}

// fs.Statクラスの判別
// type FileType = "file" | "dir" | "blcdev" | "chardev" | "symlink" | "fifo" | "socket" | "unkown"
// function getFileType(stat: fs.Stats): FileType
function getFileType(stat){
  return stat.isFile() ? "file"
       : stat.isDirectory() ? "dir"
       : stat.isBlockDevice() ? "blcdev"
       : stat.isCharacterDevice() ? "chardev"
       : stat.isSymbolicLink() ? "symlink"
       : stat.isFIFO() ? "fifo"
       : stat.isSocket() ? "socket"
       : "unkown";
}

// type Dir = {[name: string]: FileType | Dir }
// tree(pathname: string): Promise<Dir>
function tree(pathname){
  return ls(pathname)
  .then(function(elms){
    return Promise.all(
      elms.map(function(elm){
        if(elm.stat.isDirectory()){
          return tree(path.join(pathname, elm.name))
          .then(function(dir){
            return {name: elm.name, type: dir};
          });
        }
        return {name: elm.name, type: getFileType(elm.stat)};
      })
    )
  })
  .then(function(elms){
    return elms.reduce(function(o, elm){
      o[elm.name] = elm.type;
      return o;
    }, {});
  })
}

tree(".")
.then(function(o){return JSON.stringify(o, null, "  ");})
.then(console.log.bind(console))
.catch(console.error.bind(console));
