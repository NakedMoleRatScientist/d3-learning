require 'rubygems'
require 'sinatra'
require 'haml'
require 'open-uri'

set :root, File.dirname(__FILE__) + '/'

get "/" do
  haml :index
end

run Sinatra::Application

