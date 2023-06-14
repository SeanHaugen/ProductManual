const express = require('express');
const app = express();
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 4000;

const pool = new Pool({
  user: 'shaugen93',
  host: 'localhost',
  database: 'postgres',
  port: 4321 // Default port for PostgreSQL
});

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(logger);



app.get('/', async (req, res) => {
  try {
  let query = 'SELECT DISTINCT category FROM product_info ORDER BY category';
  let result = await pool.query(query)
  const productCategories = result.rows.map((row) => row.category);
  res.send(productCategories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error!");
  }
  
});


app.get('/:category', async (req, res) => {
  try {
  const productCategory = req.params.category;
  let query = `SELECT DISTINCT subcategory FROM product_info WHERE category = $1 ORDER BY subcategory`;
  let values = [productCategory];
  let result = await pool.query(query,values)
  const productSubCategories = result.rows.map((row) => row.subcategory);
  res.send(productSubCategories);
   } catch(err) {
      console.error(err);
      res.status(500).send('Internal Server Error!');
    };
});

app.get('/products/categorySelect', async (req, res) => {
  const productCategory = req.query.category;
  try {
    const categoryQuery = 'SELECT DISTINCT subcategory FROM product_info WHERE category = $1';
    const values = [productCategory];
    const result = await pool.query(categoryQuery, values);
    const products = result.rows;
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/products/itemSelect', async (req, res) => {
  const productCategory = req.query.category;
  try {
    const categoryQuery = 'SELECT * FROM product_info WHERE subcategory = $1 ORDER BY name';
    const values = [productCategory];
    const result = await pool.query(categoryQuery, values);
    const products = result.rows;
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/items/itemSelect', async (req, res) => {
  const keywordsSelect = req.query.keywords;
  try {
    const keywordQuery = 'SELECT * FROM product_info WHERE keywords LIKE $1';
    const values = [`%${keywordsSelect}%`];
    const result = await pool.query(keywordQuery, values);
    const products = result.rows;
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/category/subcategory/', async (req, res) => {
  const itemNumber = req.query.item_number;
  try {
    const categoryQuery = 'SELECT * FROM product_info WHERE item_number = $1';
    const values = [itemNumber];
    const result = await pool.query(categoryQuery, values);
    const products = result.rows;   
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

function logger (req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });