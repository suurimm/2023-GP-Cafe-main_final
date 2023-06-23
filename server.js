// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// //app.use(bodyParser.json());
// app.use(express.json());
// app.unsubscribe(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!!" });
// });
// require("./app/routes/cafe.routes.js")(app);

// app.post("/data", (req, res) => {
//   //const { updatedButtonList, secondSelect } = req.body;
//   const buttonStates = req.body;
//   let button_k = Object.keys(buttonStates);
//   //console.log(button_k);
//   console.log(buttonStates);
//   // for (v of buttonStates) {
//   //   //console.log(v[0]);
//   //   console.log(buttonStates);
//   // }
//   // console.log(typeof (Object.keys(buttonStates)));
//   // let button_k = Object.keys(buttonStates);
//   // let button_v = Object.values(buttonStates);
//   // button_k = button_k.slice(3, 14);
//   // button_v = button_v.slice(3, 14);
//   // console.log(button_k);
//   // console.log(button_v);

//   //console.log({ updatedButtonList, secondSelect });

//   res.json({ message: "데이터 전송이 완료되었습니다." });
// });
// // 포트넘버 설정
// app.listen(3000, () => {
//   console.log("Connected Server, 3000 Port");
// });
// //예진
// /*
// require("./app/routes/cafe.routes.js")(app);

// // var cors = require('cors');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// const sql = require("./app/models/db.js");

// require("./app/routes/cafe.routes.js")(app);

// //각 카테고리별 데이터시드 저장하기
// const cafe = require("./app/models/cafe.model.js");
// let brunchdatacid = [];
// let coffeedatacid = [];
// let teadatacid = [];
// let dessertdatacid = [];
// let vegandatacid = [];
// let studydatacid = [];
// let teamdatacid = [];
// let largedatacid = [];
// let chatdatacid = [];
// let childdatacid = [];
// let seniordatacid = [];
// let partydatacid = [];
// let restdatacid = [];
// let snsdatacid = [];
// let themedatacid = [];

// function findDatacid(str) {
//   if (str == "브런치") {
//     cafe.getBrunch((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         brunchdatacid.push(d.datacid);
//       }
//       // console.log(brunchdatacid)
//       return brunchdatacid;
//     });
//   } else if (str == "커피") {
//     cafe.getCoffee((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         coffeedatacid.push(d.datacid);
//       }
//       // console.log(coffeedatacid)
//       return coffeedatacid;
//     });
//   } else if (str == "차") {
//     cafe.getTea((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         teadatacid.push(d.datacid);
//       }
//       // console.log(teadatacid)
//       return teadatacid;
//     });
//   } else if (str == "디저트") {
//     cafe.getDessert((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         dessertdatacid.push(d.datacid);
//       }
//       // console.log(dessertdatacid)
//       return dessertdatacid;
//     });
//   } else if (str == "비건") {
//     cafe.getVegan((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         vegandatacid.push(d.datacid);
//       }
//       // console.log(vegandatacid)
//       return vegandatacid;
//     });
//   } else if (str == "1인") {
//     cafe.getStudy((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         studydatacid.push(d.datacid);
//       }
//       // console.log(studydatacid)
//       return studydatacid;
//     });
//   } else if (str == "다수") {
//     cafe.getTeam((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         teamdatacid.push(d.datacid);
//       }
//       // console.log(teamdatacid)
//       return teamdatacid;
//     });
//   } else if (str == "대모임") {
//     cafe.getLarge((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         largedatacid.push(d.datacid);
//       }
//       // console.log(largedatacid)
//       return largedatacid;
//     });
//   } else if (str == "대화") {
//     cafe.getChat((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         chatdatacid.push(d.datacid);
//       }
//       // console.log(chatdatacid)
//       return chatdatacid;
//     });
//   } else if (str == "아이") {
//     cafe.getChild((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         childdatacid.push(d.datacid);
//       }
//       console.log(childdatacid);
//       return childdatacid;
//     });
//   } else if (str == "할머니") {
//     cafe.getSenior((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         seniordatacid.push(d.datacid);
//       }
//       console.log(seniordatacid);
//       return seniordatacid;
//     });
//   } else if (str == "파티") {
//     cafe.getParty((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         partydatacid.push(d.datacid);
//       }
//       console.log(partydatacid);
//       return partydatacid;
//     });
//   } else if (str == "휴식") {
//     cafe.getRest((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         restdatacid.push(d.datacid);
//       }
//       // console.log(restdatacid)
//       return restdatacid;
//     });
//   } else if (str == "sns") {
//     cafe.getSns((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         snsdatacid.push(d.datacid);
//       }
//       // console.log(snsdatacid)
//       return snsdatacid;
//     });
//   } else if (str == "테마") {
//     cafe.getTheme((err, data) => {
//       if (err) {
//         res.status(500).send({
//           message: err.message || "Some error occured",
//         });
//       }
//       for (var d of data) {
//         // console.log(d.datacid)
//         themedatacid.push(d.datacid);
//       }
//       // console.log(themedatacid)
//       return themedatacid;
//     });
//   }
// }

// // console.log(findDatacid('브런치'))
// // console.log(typeof(findDatacid('브런치')))
// findDatacid("브런치");
// findDatacid("커피");
// findDatacid("차");
// findDatacid("디저트");
// findDatacid("비건");
// findDatacid("1인");
// findDatacid("다수");
// findDatacid("대모임");
// findDatacid("대화");
// findDatacid("아이");
// findDatacid("할머니");
// findDatacid("파티");
// findDatacid("휴식");
// findDatacid("sns");
// findDatacid("테마");

// app.post("/data", (req, res) => {
//   const buttonStates = req.body;
//   console.log(buttonStates);
//   // console.log(typeof (Object.keys(buttonStates)));
//   let button_k = Object.keys(buttonStates);
//   let button_v = Object.values(buttonStates);
//   // 프론트 변경 후 이거 변경 !

//   //let listfordatacid = findDatacid(button_v[1]);
//   let button_c = button_v[1];
//   button_v = Object.values(button_v[0]);
//   button_k = Object.keys(button_v[0]);
//   let listfordatacid;
//   if (button_c == "브런치") {
//     listfordatacid = brunchdatacid;
//   } else if (button_c == "커피") {
//     listfordatacid = coffeedatacid;
//   } else if (button_c == "차") {
//     listfordatacid = teadatacid;
//   } else if (button_c == "디저트") {
//     listfordatacid = dessertdatacid;
//   } else if (button_c == "비건") {
//     listfordatacid = vegandatacid;
//   } else if (button_c == "1인") {
//     listfordatacid = studydatacid;
//   } else if (button_c == "다수") {
//     listfordatacid = teamdatacid;
//   } else if (button_c == "대모임") {
//     listfordatacid = largedatacid;
//   } else if (button_c == "대화") {
//     listfordatacid = chatdatacid;
//   } else if (button_c == "아이") {
//     listfordatacid = childdatacid;
//   } else if (button_c == "할머니") {
//     listfordatacid = seniordatacid;
//   } else if (button_c == "파티") {
//     listfordatacid = partydatacid;
//   } else if (button_c == "휴식") {
//     listfordatacid = restdatacid;
//   } else if (button_c == "sns") {
//     listfordatacid = snsdatacid;
//   } else if (button_c == "테마") {
//     listfordatacid = themedatacid;
//   }

//   console.log(listfordatacid);
//   console.log(button_v);
//   let wheremoon = "WHERE ";
//   for (let i = 0; i < button_v.length; i++) {
//     if (button_v[i] == 1) {
//       wheremoon += `${button_k[i]} = 1 AND `;
//     }
//   }
//   wheremoon = wheremoon.slice(0, -5);

//   const query1 = `SELECT * FROM cafe_info2 ${wheremoon}`;
//   sql.query(query1, (err, res) => {
//     if (err) {
//       console.error("Error executing query: " + err.stack);
//       return;
//     }
//     //category에 맞는 cafe_info2 거르기
//     const secondfiltered = [];
//     for (let i = 0; i < listfordatacid.length; i++) {
//       for (let j = 0; j < res.length; j++) {
//         if (listfordatacid[i] == res[j].datacid) {
//           console.log(res[j].datacid);
//           secondfiltered.push(res[j]);
//         }
//       }
//     }
//     console.log(secondfiltered);
//   });
//   res.json({ success: true });
//   // res.json(res[0]);
// });*/

// // app.set()

// // 포트넘버 설정
// // app.listen(3000, () => {
// //   console.log("Connected Server, 3000 Port");
// // });

// // --- 이전-- -
// // var cors = require('cors');

// // const database = require('./module/db_connect.js');
// // const conn = database.conn();

// // app.set()
// // ----------

// // // 수림
// // const express = require('express');
// // const app = express();
// // const database = require('./module/db_connect.js');
// // const conn = database.conn();

// // app.use(express.json());

// // // 라우트 설정
// // app.get('/', (req, res) => {
// //     res.send('안녕하세요! 이것은 백엔드입니다.');
// // });

// // app.get('/api/data', (req, res) => {
// //     const query = 'SELECT * FROM cafe_info LIMIT 4, 1';

// //     conn.query(query, (err, results) => {
// //         if (err) {
// //             console.error('쿼리 실행 오류:', err);
// //             res.status(500).json({ error: '서버 오류' });
// //             return;
// //         }

// //         // const cafeName = results[0]?.카페명;
// //         const cafeName = results
// //         console.log({ cafeName });
// //         res.json({ cafeName });
// //         // res.json(results)
// //     });
// // });

// // // 서버 시작
// // const port = 3000;
// // app.listen(port, () => {
// //     console.log(`서버가 http:// 192.168.45.167:${port} 에서 실행 중입니다.`);
// // });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./app/models/db.js");

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});

function compareArrays(arr1, arr2, str) {
  const filteredResults = arr1.filter((row1) => {
    return row1.category == str;
  });
  // console.log(filteredResults);
  const comparedResults = [];
  for (let i = 0; i < filteredResults.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (filteredResults[i].datacid == arr2[j].datacid) {
        comparedResults.push(arr2[j]);
      }
    }
  }
  return comparedResults;
}

//let datacid_list = [];
app.post("/data", (req, res) => {
  let datacid_list = [];
  const query1 =
    "SELECT datacid, category, score FROM CafeCategory WHERE (datacid, score) IN (SELECT datacid, MAX(score) FROM CafeCategory GROUP BY datacid) ORDER BY score DESC";
  const category = req.query.name;

  const buttonStates = req.body;
  console.log(buttonStates);

  let button_k = Object.keys(buttonStates);
  let button_v = Object.values(buttonStates);
  // button_k = button_k.slice(3, 14);
  // button_v = button_v.slice(3, 14);
  console.log(button_k);
  console.log(button_v);

  var wheremoon = "WHERE ";
  for (let i = 0; i < button_v.length; i++) {
    if (button_v[i] == 1) {
      wheremoon += `${button_k[i]} = 1 AND `;
    }
  }
  wheremoon = wheremoon.slice(0, -5);
  console.log("jjjj");
  console.log(wheremoon.slice(0, -5));

  sql.query(query1, (err, res1) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return;
    }
    const query2 = "SELECT * FROM cafe_info2";
    sql.query(query2, (err, res2) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        return;
      }
      const comparedResults = compareArrays(res1, res2, category);
      console.log("제발제발plzplz.....");
      console.log(category);
      // console.log(comparedResults);
      // result(null, comparedResults);
      // res.send(comparedResults);
      for (var c of comparedResults) {
        console.log(c.datacid);
        datacid_list.push(c.datacid);
      }

      const queryT = `SELECT * FROM cafe_info2 ${wheremoon}`;
      console.log(queryT);

      sql.query(queryT, (err, res3) => {
        if (err) {
          console.error("Error executing query: " + err.stack);
          return;
        }
        // console.log(res);
        // res.send(response);
        console.log("~~~~~~~mm~~~~~~");

        const secondfiltered = [];
        for (let i = 0; i < datacid_list.length; i++) {
          for (let j = 0; j < res3.length; j++) {
            if (datacid_list[i] == res3[j].datacid) {
              //console.log(res[j].datacid)
              secondfiltered.push(res3[j]);
            }
          }
        }
        //console.log(secondfiltered);
        console.log("~~~~~~~ppp~~~~~~");

        for (var r of res3) {
          console.log(r.datacid);
        }
        console.log("~~~~~~~ㅎㅎ~~~~~~");
        for (var d of secondfiltered) {
          console.log(d.datacid);
        }
        //res.json({ finally: true });
        res.send(secondfiltered);
        console.log(secondfiltered);
      });
    });
  });

  // res.json({ success: true });
  // res.json(res);
});
///

// const cafe = require("./app/models/cafe.model.js");
// let datacid_list = [];
// cafe.getBrunch((err, data) => {
//     if (err) {
//         res.status(500).send({
//             message:
//                 err.message || "Some error occured"
//         });
//     }
//     else console.log("브런치 데이터 -----");
//     // console.log(data)
//     for (var d of data) {
//         // console.log(d.datacid)
//         datacid_list.push(d.datacid);
//     };
// });

// const sql = require("./app/models/db.js");
// // POST 요청 처리
// app.post('/data', (req, res) => {
//     const buttonStates = req.body;
//     const category_name = req.query.name;
//     console.log("여기에요~~~~")
//     console.log(category_name);
//     console.log(buttonStates);
//     // console.log(typeof (Object.keys(buttonStates)));
//     let button_k = Object.keys(buttonStates);
//     let button_v = Object.values(buttonStates);
//     button_k = button_k.slice(3, 14);
//     button_v = button_v.slice(3, 14);
//     // console.log(button_k);
//     // console.log(button_v);
//     var wheremoon = 'WHERE ';
//     for (let i = 0; i < button_v.length; i++) {
//         if (button_v[i] == 1) {
//             wheremoon += `${button_k[i]} = 1 AND `
//         }
//     }
//     wheremoon = wheremoon.slice(0, -5)
//     // console.log(wheremoon.slice(0, -5));

//     const query1 = `SELECT * FROM cafe_info2 ${wheremoon}`;
//     // console.log(query1);

//     sql.query(query1, (err, res) => {
//         if (err) {
//             console.error('Error executing query: ' + err.stack);
//             return;
//         }
//         // console.log(res);
//         // res.send(response);
//         const secondfiltered = [];
//         for (let i = 0; i < datacid_list.length; i++) {
//             for (let j = 0; j < res.length; j++) {
//                 if (datacid_list[i] == res[j].datacid) {
//                     // console.log(res[j].datacid)
//                     secondfiltered.push(res[j])
//                 }
//             }
//         }
//         console.log(secondfiltered.datacid);
//         for (var d of secondfiltered) {
//             console.log(d.datacid)
//         };

//     })
//     // res.json({ success: true });
//     // res.json(res);
// });

require("./app/routes/cafe.routes.js")(app);

// 포트넘버 설정
app.listen(3000, () => {
  console.log("Connected Server, 3000 Port");
});

// --- 이전-- -
// var cors = require('cors');

// const database = require('./module/db_connect.js');
// const conn = database.conn();

// app.set()
// ----------

// // 수림
// const express = require('express');
// const app = express();
// const database = require('./module/db_connect.js');
// const conn = database.conn();

// app.use(express.json());

// // 라우트 설정
// app.get('/', (req, res) => {
//     res.send('안녕하세요! 이것은 백엔드입니다.');
// });

// app.get('/api/data', (req, res) => {
//     const query = 'SELECT * FROM cafe_info LIMIT 4, 1';

//     conn.query(query, (err, results) => {
//         if (err) {
//             console.error('쿼리 실행 오류:', err);
//             res.status(500).json({ error: '서버 오류' });
//             return;
//         }

//         // const cafeName = results[0]?.카페명;
//         const cafeName = results
//         console.log({ cafeName });
//         res.json({ cafeName });
//         // res.json(results)
//     });
// });

// // 서버 시작
// const port = 3000;
// app.listen(port, () => {
//     console.log(`서버가 http:// 192.168.45.167:${port} 에서 실행 중입니다.`);
// });
