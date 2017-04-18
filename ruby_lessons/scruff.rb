require 'pry'

@scruff = {
  name: 'Scruff McGruff',
  address: 'Chicago, IL 60652',
  slogan: 'Help take a bite out of crime!',
  species: 'Anthropomorphic animated dog',
  birth_year: 1980,
  communication_mediums: [
    'television',
    'newspaper',
    'billboards',
    'radio'
  ],
  bear_friend: {
    name: 'Smokey the Bear',
    rating: 10
  },
  owner: 'Jack Keil'
}


def print_species ()
  print @scruff[:species] + "\n"
end

def print_name_rating ()
  print @scruff[:name] + "\n"
  print @scruff[:bear_friend][:rating]
end

def print_slogan ()
  if @scruff[:slogan]
    print @scruff[:slogan]
  else
    puts "Guess there's no slogan here!"
  end
end

def put_keyvalue_pair ()
  @scruff.each do |key|
    if key[1] == 'Scruff McGruff'
      puts "#{key[0]}: #{key[1]}"
    else
      puts "Nope"
    end
  end
end

print_species()
print_name_rating()
print_slogan()
put_keyvalue_pair()
