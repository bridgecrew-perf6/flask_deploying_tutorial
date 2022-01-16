from flask import Flask, render_template, redirect,url_for 

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/tema1")
def tema1():
    return render_template("tema1.html")

@app.route("/tema2")
def tema2():
    return render_template("tema2.html")
   



if __name__ == '__main__':
    app.run(debug=True)