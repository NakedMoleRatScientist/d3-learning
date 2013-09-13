require "json"
require "csv"

data = []
CSV.foreach("2013-07-01-gwern-googlealerts.csv") do |line|
  data.push({:name => line[0], :date => line[1], :links => line[2]})
end  
data.shift()
data = data.to_json()

File.open("googlealert.json", "w") {|f| f.write(data)}

