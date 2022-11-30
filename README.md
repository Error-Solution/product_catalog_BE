pagination works as follows:
 -> get '/phones?page=X&limit=Y' => return [{}...] - X = pages number, Y = quantity card on page,
 if page = false || limit = false => return [{}...] - full array