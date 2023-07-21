import mysql.connector
from flask import Flask, render_template

# Connect to the database (replace the placeholders with your database details)
database = mysql.connector.connect(
    host='your_database_host',
    user='your_database_user',
    password='your_database_password',
    database='your_database_name'
)

# Create a cursor to execute SQL queries
cursor = database.cursor()

# SQL query to select product data from the table
query = "SELECT name, price, description FROM products"

# Execute the query and fetch the data
cursor.execute(query)
product_data = cursor.fetchall()

# Close the cursor and database connection
cursor.close()
database.close()

app = Flask(__name__)
@app.route('/')
def display_data():
    global product_data
    return render_template('home.html', data_list=product_data)

if __name__ == '__main__':
    app.run(debug=True)
