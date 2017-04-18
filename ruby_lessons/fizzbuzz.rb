def count_to_20 ()
    (1..20).each do |i|
      if i % 3 == 0 and i % 5 == 0
        puts 'fizzbuzz'
      elsif i % 3 == 0
        puts 'fizz'
      elsif i % 5 == 0
        puts 'buzz'
      else
        puts i
    end
  end
end

count_to_20()
