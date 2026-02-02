* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
}

header {
  background: #111;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

header h1 {
  font-size: 2rem;
}

header p {
  margin: 10px 0 20px;
}

.btn {
  background: #e63946;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
}

section {
  padding: 30px 20px;
  max-width: 900px;
  margin: auto;
}

section h2 {
  margin-bottom: 15px;
  color: #111;
}

ul li {
  margin-bottom: 10px;
}

.highlight {
  background: #fff;
  border-left: 5px solid #e63946;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111;
  color: white;
  margin-top: 30px;
}

/* Desktop enhancements */
@media (min-width: 768px) {
  header h1 {
    font-size: 2.5rem;
  }

  .btn {
    font-size: 1.2rem;
  }
}

