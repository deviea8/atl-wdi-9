require 'pry'
require 'httparty'
require 'rubygems'
require 'json'

url = "https://s3.amazonaws.com/uploads.hipchat.com/39979/1201178/KrK5DgWB6u11piJ/happs_v2.json"
response = HTTParty.get(url)

parsed_response = JSON.parse(response)

puts parsed_response[:headers]
