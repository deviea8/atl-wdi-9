Rails.application.routes.draw do
  get 'song/index'

  get 'song/show'

  get 'comments/index'

  get 'articles' => 'articles#index'
  get 'articles/:article_id' => 'articles#show', :as => "full_article"
  get 'comments' => 'comments#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
