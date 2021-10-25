const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(1);
});

process.on("unhandledRejection", (res) => {
  console.log(res);
  process.exit(1);
});
