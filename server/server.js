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




app.get('/', (req, res) => {
  const productCategory = req.params.category;
  // console.log(productCategory);

  let query = 'SELECT DISTINCT category FROM product_info ORDER BY category';


  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const productCategories = result.rows.map((row) => row.category);
      res.send(productCategories);
    }
  });
});


app.get('/:category',(req, res) => {
  const productCategory = req.params.category;
  // console.log(productCategory);

  let query = `SELECT DISTINCT subcategory FROM product_info WHERE category = $1 ORDER BY subcategory`;
  let values = [productCategory];

  pool.query(query,values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const productSubCategories = result.rows.map((row) => row.subcategory);
      res.send(productSubCategories);
    }
  });
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
    const categoryQuery = 'SELECT * FROM product_info WHERE subcategory = $1';
    const values = [productCategory];

    const result = await pool.query(categoryQuery, values);
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