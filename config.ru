require 'rubygems'
require 'sinatra'
require 'haml'
require 'open-uri'

mime_type :javascript, "text/javascript"

set :public_folder, File.dirname(__FILE__) + "/public"
set :root, File.dirname(__FILE__) + '/'

get "/" do
  haml :index
end

run Sinatra::Application

