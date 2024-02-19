from flask import Flask

app = Flask(__name__)

# My API Route
@app.route('/list')
def list():
    return {"list": ["dodgers", "lakerss", "kings"]}

if __name__ == "__main__":
    app.run(debug = True, port = 5006) 