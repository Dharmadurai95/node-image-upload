const http = require('http');
const cluster = require("cluster")
const os = require('os');
const process = require('process')
const fs = require("fs")
const path = require('path')
const { AsyncLocalStorage } = require('async_hooks');
const asyncLocalStorage = new AsyncLocalStorage();



/* 
   1. http.agent
   2. http.clientRequest
   3. http.server
   4. http.serverResponse
   5. http.incomingMessage
   6. http.outgoingMessage
   
*/

function getUserinfo() {
   return [
      {
         "id": 1,
         "name": "Leanne Graham",
         "username": "Bret",
         "email": "Sincere@april.biz",
         "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
               "lat": "-37.3159",
               "lng": "81.1496"
            }
         },
         "phone": "1-770-736-8031 x56442",
         "website": "hildegard.org",
         "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
         }
      },
      {
         "id": 2,
         "name": "Ervin Howell",
         "username": "Antonette",
         "email": "Shanna@melissa.tv",
         "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
               "lat": "-43.9509",
               "lng": "-34.4618"
            }
         },
         "phone": "010-692-6593 x09125",
         "website": "anastasia.net",
         "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
         }
      },
      {
         "id": 3,
         "name": "Clementine Bauch",
         "username": "Samantha",
         "email": "Nathan@yesenia.net",
         "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
               "lat": "-68.6102",
               "lng": "-47.0653"
            }
         },
         "phone": "1-463-123-4447",
         "website": "ramiro.info",
         "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
         }
      },
      {
         "id": 4,
         "name": "Patricia Lebsack",
         "username": "Karianne",
         "email": "Julianne.OConner@kory.org",
         "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
               "lat": "29.4572",
               "lng": "-164.2990"
            }
         },
         "phone": "493-170-9623 x156",
         "website": "kale.biz",
         "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
         }
      },
      {
         "id": 5,
         "name": "Chelsey Dietrich",
         "username": "Kamren",
         "email": "Lucio_Hettinger@annie.ca",
         "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
               "lat": "-31.8129",
               "lng": "62.5342"
            }
         },
         "phone": "(254)954-1289",
         "website": "demarco.info",
         "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
         }
      },
      {
         "id": 6,
         "name": "Mrs. Dennis Schulist",
         "username": "Leopoldo_Corkery",
         "email": "Karley_Dach@jasper.info",
         "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
               "lat": "-71.4197",
               "lng": "71.7478"
            }
         },
         "phone": "1-477-935-8478 x6430",
         "website": "ola.org",
         "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
         }
      },
      {
         "id": 7,
         "name": "Kurtis Weissnat",
         "username": "Elwyn.Skiles",
         "email": "Telly.Hoeger@billy.biz",
         "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
               "lat": "24.8918",
               "lng": "21.8984"
            }
         },
         "phone": "210.067.6132",
         "website": "elvis.io",
         "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
         }
      },
      {
         "id": 8,
         "name": "Nicholas Runolfsdottir V",
         "username": "Maxime_Nienow",
         "email": "Sherwood@rosamond.me",
         "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
               "lat": "-14.3990",
               "lng": "-120.7677"
            }
         },
         "phone": "586.493.6943 x140",
         "website": "jacynthe.com",
         "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
         }
      },
      {
         "id": 9,
         "name": "Glenna Reichert",
         "username": "Delphine",
         "email": "Chaim_McDermott@dana.io",
         "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
               "lat": "24.6463",
               "lng": "-168.8889"
            }
         },
         "phone": "(775)976-6794 x41206",
         "website": "conrad.com",
         "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
         }
      },
      {
         "id": 10,
         "name": "Clementina DuBuque",
         "username": "Moriah.Stanton",
         "email": "Rey.Padberg@karina.biz",
         "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
               "lat": "-38.2386",
               "lng": "57.2232"
            }
         },
         "phone": "024-648-3804",
         "website": "ambrose.net",
         "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
         }
      }
   ]
}

function p1() {
   const number = asyncLocalStorage.getStore()
   console.log(number, 'p1')
   return new Promise((res, req) => setTimeout(() => res(number), 0))
}
function p2() {
   const number = asyncLocalStorage.getStore()
   console.log(number, 'p2')
   return new Promise((res, req) => setTimeout(() => {
      let count = 0;
      while (count < 10000000) {
         count++;
      }
      return res(getUserinfo()[number - 1])

   }, 0))
}

// if (cluster.isPrimary) {
//    console.log("primary" + process.pid + 'running');
//    const cpuCnt = Math.ceil(os.cpus().length / 2);
//    console.log(cpuCnt)
//    for (let i = 0; i < Math.ceil(os.cpus().length / 2); i++) {
//       cluster.fork()
//    }
//    cluster.on("exit", (worker, code, signal) => {
//       console.log(`worker ${worker.process.id}  dies`);
//       cluster.fork();
//    })

//    process.on('SIGINT', () => {
//       console.log('Shutting down master and workers...');
//       // Kill all workers
//       for (const id in cluster.workers) {
//          cluster.workers[id].kill();
//       }
//       process.exit();
//    });
// } else {
const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify a specific origin
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, fileName');
   if (req.url.endsWith('.html') && req.method == 'GET') {

      const reader = fs.createReadStream(`./static/${req.url}`)
      res.writeHeader(200, { "Content-Type": "text/html" })
      reader.pipe(res)
   }
   if (req.method == 'GET') {
      if (req.url.startsWith('/allImages')) {
         const folderPath = path.join(__dirname, 'uploads')
         let imageList = []
         const strings = fs.readdirSync(folderPath, { encoding: 'utf-8', recursive: false })


         strings.forEach(file => {
            imageList.push({ url: 'http://localhost:3000/uploads/' + file })
         });
         res.writeHeader(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify({ images: imageList, status: true }));

      }

      else if (req.url.startsWith('/uploads')) {
         res.writeHeader(200, { 'Content-Type': "image/jpeg" })
         const fileName = req.url.split('/').at(-1)
         const reader = fs.createReadStream('./uploads/' + fileName);
         reader.pipe(res)
      } else if (req.url.startsWith('/users')) {
         const getParam = Number(req.url.split('/').at(-1)) || Math.floor(Math.random() * 10) + 1
         res.writeHeader(200, { 'Content-Type': "application/json" })
         asyncLocalStorage.run(getParam, () => {
            p1().then(rs => p2().then(ps => res.end(JSON.stringify(ps))))

         })
      } else {
         res.writeHeader(200, { "Content-Type": "text/plain" })
         res.end("404 NOT FOUND PLEASE VERIFY YOUR ENDPOINT\n")
      }
   } else if (req.method == 'POST' && req.url == '/upload') {

      res.setHeader('Content-Type', "application/json")

      const fileName = req.headers.filename;
      const reader = fs.createWriteStream('uploads/' + fileName);
      const contentLength = Number(req.headers['content-length'])
      if (isNaN(contentLength) || contentLength <= 0) {
         res.statusCode = 400;
         res.end(JSON.stringify({ status: false, message: 'Invalid document' }))
      }
      reader.on('error', (err) => {
         console.log(err);
         res.statusCode = 400;
         res.end(JSON.stringify({ status: false, message: 'unable to store data in this server' }))
      })


      req.on('end', () => {
         reader.close(() => {
            res.end(JSON.stringify({ status: "success", url: `http://localhost:3000/uploads/${fileName}` }))
         })
      })


      // res.setHeader('Content-Type', 'application/json')

      // let contentLength = parseInt(req.headers['content-length'])
      // if (isNaN(contentLength) || contentLength <= 0) {
      //    res.statusCode = 411;
      //    res.end(JSON.stringify({ status: "error", description: "No File" }))
      //    return
      // }

      // // Try to use the original filename
      // let filename = req?.headers['filename'] || `image.${new Date().getUTCMilliseconds()}.jpeg`
      // if (filename == null) {
      //    filename = "file." + req.headers['content-type'].split('/')[1]
      // }

      // const filestream = fs.createWriteStream(`uploadskk/${filename}`)

      // filestream.on("error", (error) => {
      //    console.error(error)
      //    res.statusCode = 400;
      //    res.write(JSON.stringify({ status: "error", description: error }))
      //    res.end()
      // })

      // // Write data as it comes
      // req.pipe(filestream)

      // req.on('end', () => {
      //    filestream.close(() => {
      //       const resp = { status: "success", url: `http://localhost:3000/uploads/${filename}` }
      //       res.end(JSON.stringify(resp))
      //    })
      // })

   } else {
      res.writeHeader(200, { "Content-Type": "text/plain" })
      res.end("404 NOT FOUND PLEASE VERIFY YOUR ENDPOINT\n")
   }


})
server.listen(3000)
console.log('worker process ' + process.pid + 'started')



// }






