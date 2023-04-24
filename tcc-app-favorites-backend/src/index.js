const express = require('express');
const routes  = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
	origin: '*'
}));

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
