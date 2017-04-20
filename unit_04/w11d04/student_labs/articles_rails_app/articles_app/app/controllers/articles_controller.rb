class ArticlesController < ApplicationController
  def index
    @message = "Testing testing"
    @articles = Article.all
  end

  def show
    @show_message = "This is the article show page"
    @article = Article.find(params[:article_id])
    @comments = @article.comments
  end
end
