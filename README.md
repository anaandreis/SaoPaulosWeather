# SaoPaulosWeather
Simple Weather app that displays current and historical weather using HTML, CSS, JS and Python


Due to my professional background as a major student in environmental sciences, I wanted to do something climate related. The idea of this app, actually, is something that always hovered my thoughts and I wanted to build it for my personal use, and this personal motivation will explain why I stuck to the idea to the very end, although I had to make some alterations to my initial plan.

At first, the plan was to construct the app to be able to gather information from around the world, both current and historical, through the use of APIs in JS. Even though historical weather APIs are widely available, they are also pretty expensive, especially when you take into account the conversion for dollars to reais(brazilian currency).

At this point I’ve already gotten the current weather data from Open Weather API and displayed it in the HTML(that was the first file I built for this project). I’ve decided to only display the parameters at first, so I left the design and css file to be written later on.

I decided then to take another route and fish the historical data manually. I found it at the Brazilian National Meteorology Institute website. The records were a mess, and sorted by city, year and day. Collecting data from many cities in Brazil would take a lot of time, so I made the decision to scale down and focus on only one city, and the chosen one was São Paulo.

The data was organized in CSV files which contained a lot more data than I needed. I was only looking for the temperatures throughout the day and the date when they happened.
I downloaded all the 30 files from the 30 years of data that the website offered and combined them into one using Excel. I deleted the data that I didn’t need but was confronted with another problem: the temperatures were given by the hour of which day.

I had already decided that I would use python to search through the data and feed it back to the HTML, but the files were enormous so I had to figure out a way to trim them.

In Excel, I organized the data through month/day, so I could group the same date from different years. From there, I gathered the max and min temperature per date, and also the averages, and created a file with these results with only 365 rows instead of 200.000.

Then I wrote the python file of the app, using Flask to feed these variables back to the html file.
To go through the data and pick the correct rows for the current day, I used the python datetime.now() function, pulling the month and day from it. I created a list with them and stored them into a variable that was a string.
Then I opened and read the csv file and stored the data that matched the according date column in the variables that would be sent to the front page.

When everything was already working, I moved on to the design of the page and writing the css code. I knew I wanted to do something that could work both on the web and in mobile devices, so I searched through the internet to find nice templates for boxes and a good enough google font. I picked a nice background image and that was it.
