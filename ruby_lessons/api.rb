require 'httparty'
require 'pry'
require 'open-uri'

puts "Provide an email address"
email = gets.chomp
encoded_email = URI::encode(email)

url = "https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/#{encoded_email}"
headers = {
  headers:{
    "X-Mashape-Key" => "TrGhb9kijEmshPOY0JlcmhkUec6np1VdulojsnsEmyNIQTtxzX",
    "Accept" => "application/json"
  }
}

response = HTTParty.get(url, headers)
validation = response["isValid"]

def is_valid (validation)
  if validation
    puts "That email is valid!"
  else
    puts "That is not a real email. Try again!"
  end
end

is_valid(validation)
