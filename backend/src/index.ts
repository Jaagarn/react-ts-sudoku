const app = require("./app");

const PORT = 4096;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});