const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
