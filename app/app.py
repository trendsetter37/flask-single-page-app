from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/hello')
#@app.route('/')
def hello():
	return "Hello, World"

@app.route('/', methods=["GET", "POST"])
def home():
	if request.method == 'POST':
		value_one = int(request.form.get('first'))
		value_two = int(request.form.get('second'))
		total = value_one + value_two
		data = {"total":str(total)}
		return jsonify(data)
		
	else:
		return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)