const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter Mesage</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
   fs.readFile(
    "/Users/shilpichoudhary/Desktop/Node Js/Sharpener/message.txt",
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    }
  );
  
 

  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello from Node Js</h1></body>");
  res.write("</html>");
  return res.end();
});
server.listen(3000);
