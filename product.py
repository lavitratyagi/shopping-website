import mysql.connector

# Connect to the database (replace the placeholders with your database details)
db = mysql.connector.connect(
    host='your_',
    user='your_database_user',
    password='your_database_password',
    database='your_database_name'
)

# Create a cursor to execute SQL queries
cursor = db.cursor()

# SQL query to select product data from the table
query = "SELECT name, price, description FROM products"

# Execute the query and fetch the data
cursor.execute(query)
product_data = cursor.fetchall()

# Close the cursor and database connection
cursor.close()
db.close()
