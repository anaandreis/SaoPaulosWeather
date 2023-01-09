import csv
import datetime
from flask import Flask, render_template

# 1 step: importing the data and creating a string variable to store data

current_time = datetime.datetime.now()
month = str(current_time.month)
slash = '/'
day = str(current_time.day)
datelist = [month, slash, day]
monthday = ''.join(datelist)

# 2 step: pulling data from the csv file and storing in variables
csv_file=csv.reader(open('temperaturas.csv', 'r'))
for row in csv_file:
    if monthday==row[2]:
        MAXMAX= row[4]
        MINMIN= row[7]
        AVGMAX= row[3]
        AVGMIN= row[6]
        MAXDAY= row[5]
        MINDAY= row[8]


# 3 step: integrating with html and sending variables
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", maxmax=MAXMAX, minmin=MINMIN, avgmax=AVGMAX, avgmin=AVGMIN, maxday=MAXDAY, minday=MINDAY)

if __name__ == "__main__":
    app.run(debug=True)