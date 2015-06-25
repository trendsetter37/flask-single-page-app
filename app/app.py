from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

GITHUB_URI = "https://api.github.com/search/users?"

@app.route('/hello')
#@app.route('/')
def hello():
	return "Hello, World"

# @app.route('/', methods=["GET", "POST"])
# def home():
# 	if request.method == 'POST':
# 		value_one = int(request.form.get('first'))
# 		value_two = int(request.form.get('second'))
# 		total = value_one + value_two
# 		data = {"total":str(total)}
# 		return jsonify(data)
		
# 	else:
# 		return render_template('index.html')

@app.route('/', methods=["GET", "POST"])
def home():
	if request.method == 'POST':
		# User imports
		value_one = str(request.form.get('first'))
		value_two = str(request.form.get('second'))
		# api call
		search_params = "q=location:{}+language:{}".format(value_one, value_two)
		url = GITHUB_URI + search_params

		try:
			response_dict = requests.get(url).json()
			return jsonify(response_dict)
		except:
			return jsonify({"error": "Error message"}), 500
		
		
	return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)