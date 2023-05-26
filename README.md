# SaoPaulosWeather

### Simple Weather app that displays current and historical weather using HTML, CSS, JS and Python

Built to provide São Paulo citizens a notion of just how much the climate is changing in the city.

![saopaulosWeatherImage](https://github.com/anaandreis/SaoPaulosWeather/assets/116083867/60aec1d6-24ca-4d87-8c9b-55637dc901e4)

I got the historical info from the Brazilian National Meteorology Institute website and the current weather from OpenWeatherMap API.

The data was organized in 30 CSV files and I combined them into one using Excel.(It's available in the temperaturas.csv file) 

I deleted the data that I didn’t need but the temperatures were given by the hour of which day.

In Excel, I organized the data through month/day, so I could group the same date from different years. From there, I gathered the max and min temperature per date, and also the averages, and created a file with these results with only 365 rows instead of 200.000.

I've used python to search through the data and feed it back to the HTML.
